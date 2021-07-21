# 

Probably this issue here: https://github.com/testing-library/react-testing-library/issues/729

1. Run yarn start. Open developer tools and observe console. 
2. If you type in the text box and hit submit, the form will be logged. 
3. If you do not have anything in the form, the form will not be logged (ie. the onSubmit function is never triggered). 

4. Run the tests. 
5. The behavior you observe is not matched in the tests. 

