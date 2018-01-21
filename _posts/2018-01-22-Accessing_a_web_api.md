---
title: 'Wrapping Access to Web-Services in R-functions.'  
author: "flovv"
layout: post
published: true
status: publish
tags: R
draft: no
---
 

 
 
One of the great features of R is the possibility to quickly access web-services. While some companies have the habit and policy to document their APIs, there is still a large chunk of undocumented but great web-services that help the regular data scientist.
 
In the following short post, I will show how we can turn a simple web-serivce in a nice R-function. 
The example I am going to use is the linguee translation service: [DeepL](www.deepl.com). 
Just as google translate, Deepl features a simple text field. When a user types in text, the translation appears in a second textbox. Users can choose between the languages.
 
In order to see how the service works in the backend, let's have a quick look at the network traffic.
For that we open the browser's developer tools and jump to the network tab. Next, we type in a sentence and see which requests (XHR) are made. The interface repeatedly sends JSON requests to the following endpoint: "https://www.deepl.com/jsonrpc".
 
![Chrome's developer console](/figures/api.PNG)
 
Looking at a single request we can quickly identify the parameters that we typed in (grey area, in the lower right corner). We copy these in r and assign them to a variable.

{% highlight r %}
str <- '{"jsonrpc":"2.0","method":"LMT_handle_jobs","params":{"jobs":[{"kind":"default","raw_en_sentence":"R is awesome"}],"lang":{"user_preferred_langs":["DE","EN","FR"],"source_lang_user_selected":"auto","target_lang":"FR"},"priority":-1},"id":11}'
{% endhighlight %}
 
Using a service to format the json (e.g. https://jsonformatter.curiousconcept.com/) we can turn the blob in a well readable json file. Next, we convert the JSON string in a R object (a nested list) by using a simple JSON to R language translation:
 

{% highlight r %}
require(stringr)
str1 <- str_replace_all(str, ":", "=")
str2 <- str_replace_all(str1, "\\[", "list(")
str3 <- str_replace_all(str2, "\\]", ")" )
str4 <- str_replace_all(str3, "\\{", "list(" )
str5 <- str_replace_all(str4, "\\}", ")" )
 
eval(parse(text=str5))
{% endhighlight %}
 
Finally, we evaluate the string as R-code, this gives us the DeepL web-services' parameters as an R nested list.
All we have to do now is wrap the parameters in a R function and use variables to change the important ones:
 

{% highlight r %}
require(rjson)
require(httr)
deepLTranslate <- function(text="R is awesome", from_lang="EN", to_lang="DE"){
  
  BASE_URL = 'https://www.deepl.com/jsonrpc'
  JSONRPC_VERSION = '2.0'
  DEEPL_METHOD = 'LMT_handle_jobs'
  
  params =list('jsonrpc'= JSONRPC_VERSION, 
               'method'= DEEPL_METHOD, 
               params= list(
                 'jobs'=list(list('kind'= "defaut", 'raw_en_sentence'= text)),
                 'lang'=list(
                   'user_preferred_langs'=list(from_lang,to_lang),
                   'source_lang_user_selected'= from_lang, 'target_lang'=to_lang)
               )   
  )
  
  res <- POST(BASE_URL,body = toJSON(params))
  
  co <- content(res, "text")
  
  if(res$status_code ==200){
    return(fromJSON(co))
  }
  else{
    return(co)
  }
  
}
 
#### excute the function with defaults ...
deepLTranslate()
{% endhighlight %}



{% highlight text %}
## $id
## [1] 0
## 
## $jsonrpc
## [1] "2.0"
## 
## $result
## $result$source_lang
## [1] "EN"
## 
## $result$source_lang_is_confident
## [1] 0
## 
## $result$target_lang
## [1] "DE"
## 
## $result$translations
## $result$translations[[1]]
## $result$translations[[1]]$beams
## $result$translations[[1]]$beams[[1]]
## $result$translations[[1]]$beams[[1]]$num_symbols
## [1] 5
## 
## $result$translations[[1]]$beams[[1]]$postprocessed_sentence
## [1] "R ist fantastisch"
## 
## $result$translations[[1]]$beams[[1]]$score
## [1] -5000.6
## 
## $result$translations[[1]]$beams[[1]]$totalLogProb
## [1] -4.37026
## 
## 
## $result$translations[[1]]$beams[[2]]
## $result$translations[[1]]$beams[[2]]$num_symbols
## [1] 5
## 
## $result$translations[[1]]$beams[[2]]$postprocessed_sentence
## [1] "R ist großartig"
## 
## $result$translations[[1]]$beams[[2]]$score
## [1] -5000.64
## 
## $result$translations[[1]]$beams[[2]]$totalLogProb
## [1] -4.6875
## 
## 
## $result$translations[[1]]$beams[[3]]
## $result$translations[[1]]$beams[[3]]$num_symbols
## [1] 6
## 
## $result$translations[[1]]$beams[[3]]$postprocessed_sentence
## [1] "R ist fantastisch."
## 
## $result$translations[[1]]$beams[[3]]$score
## [1] -5000.67
## 
## $result$translations[[1]]$beams[[3]]$totalLogProb
## [1] -5.57148
## 
## 
## $result$translations[[1]]$beams[[4]]
## $result$translations[[1]]$beams[[4]]$num_symbols
## [1] 6
## 
## $result$translations[[1]]$beams[[4]]$postprocessed_sentence
## [1] "R ist großartig."
## 
## $result$translations[[1]]$beams[[4]]$score
## [1] -5000.72
## 
## $result$translations[[1]]$beams[[4]]$totalLogProb
## [1] -6.03852
## 
## 
## 
## $result$translations[[1]]$timeAfterPreprocessing
## [1] 0
## 
## $result$translations[[1]]$timeReceivedFromEndpoint
## [1] 311
## 
## $result$translations[[1]]$timeSentToEndpoint
## [1] 0
## 
## $result$translations[[1]]$total_time_endpoint
## [1] 1
{% endhighlight %}
 
 
I hope the post helps you turn more web-services into R-functions/packages.
If you are looking for other translation services have a look at the translate or translateR packages.
 
 
 
 
 
 
 
 
