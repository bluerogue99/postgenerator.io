import{W as n,j as e,Y as d}from"./app-Df1JDRzg.js";import{T as u,I as c}from"./TextInput-iXnu69r8.js";import{P as x}from"./PrimaryButton-B9h5dwnZ.js";import{G as p}from"./GuestLayout-Cl342CMs.js";function y({status:t}){const{data:a,setData:r,post:o,processing:m,errors:l}=n({email:""}),i=s=>{s.preventDefault(),o(route("password.email"))};return e.jsxs(p,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600 dark:text-green-400",children:t}),e.jsxs("form",{onSubmit:i,children:[e.jsx(u,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>r("email",s.target.value)}),e.jsx(c,{message:l.email,className:"mt-2"}),e.jsx("div",{className:"mt-4 flex items-center justify-end",children:e.jsx(x,{className:"ms-4",disabled:m,children:"Email Password Reset Link"})})]})]})}export{y as default};
