const logInBtn=document.getElementById('login');
logInBtn.addEventListener('click',function(){
    const loginArea=document.getElementById('login-area');
    loginArea.style.display='none';
    const transactionArea=document.getElementById('transaction-area');
    transactionArea.style.display='block';
})