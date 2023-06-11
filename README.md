# **Projet**

## **Api to generate and validate password.**

### **Description:**

### Create an API with two routes, one to generate automatic passwords with at least 12 characters and that has uppercase, lowercase, numbers and symbols, the second route would be to verify that the password that the user sent is in the standards already defined.

<br>
<br>

# Start project

- Requirements:
  - Need to have node installed.
  - Have the Yarn package manager installed.
  - Use an API testing tool like Insominia or Postman.
- Run the "yarn start" command to start the service.

<br>
<br>

# Rotas

### **GET: http://localhost:3000/api/password/generate**

### **Result:**

### Status: 201

<pre>

{
	"message": "Password successfully generated",
	"password": "&dgS)$RcaC$4" 
}

</pre>

### **Important: <br> A different new password is generated for each request.**

<br>
<br>

### **GET: http://localhost:3000/api/password/validate**

### **Body:**

<pre>

{
	"password": "@Rd1234556678"
}

</pre>

### **Important: <br>The entered password must contain at least 12 letters and contain uppercase and lowercase letters, numbers and symbols.**

<br>

### **Result:**

### **Sucess**

### Status: 201

<pre>

{
	"message": "valid password"
}

</pre>

### **Error**

### Status: 400

### **Possible error message:**

<pre>

{
	"error": "New password required"
}
</pre>

<pre>

{
	"error": "The password must be at least 12 characters long."
}

</pre>

<pre>

{
	"error": "Must have at least one numeric character."
}

</pre>
<pre>

{
	"error": "Must have at least one upperCase character."
}

</pre>

<pre>

{
	"error": "Must have at least one lowerCase character."
}

</pre>

<pre>

{
	"error": "Must have at least one symbol character."
}

</pre>

<br>

# Tools used

- Node js
- TypeScript
- Libs
  - Express
  - secure-random-password
  - ts-node-dev
