# MovieApp
The following are issues I faced and I hope the evaluators considers them while evaluation in case issues due to these arise:

There was constant issue with cors policy despite me re-writing the webconfiguration in springboot. I hope that does not lead to page rendering improperly. 
I had to use CORS extension.

Many links were obsolete and I had to create a super user in the backend to add fresh links. 
However it seems only frontend needs to be shipped.

The GridList components are part of evaluation, however they give a warning as they have been renamed to ImageList (in the version I have). 
So I have used alias in the import for the same.

During the project walkthrough and the earlier part of the course componentWillmount was extensively encouraged, but it also leads to warnings as it is being deparcated. 
So UNSAFE_ has been used.

REACT ROUTER DOM VERSION 5.2 has been used as there has been dramatic difference between course content guidance and current version 6.2+

Thank You!
