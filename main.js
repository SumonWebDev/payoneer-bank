//login button event handler
const logInBtn=document.getElementById('login');
logInBtn.addEventListener('click',function(){
    const loginArea=document.getElementById('login-area');
    loginArea.style.display='none';
    const transactionArea=document.getElementById('transaction-area');
    transactionArea.style.display='block';
})

//deposit button event handler

const addDepositBtn=document.getElementById('addDeposit');
addDepositBtn.addEventListener('click',function(){
    const depositNumber=getInputNumber('depositAmount');
    /*
  const depositAmount=document.getElementById('depositAmount').value;
  const depositNumber=parseFloat(depositAmount);
  const currentDeposit=document.getElementById('currentDeposit').innerText;
  const currentDepositNumber=parseFloat(currentDeposit);
  const totalDeposit=depositNumber + currentDepositNumber;
  document.getElementById('currentDeposit').innerText=totalDeposit;
  
  */
  updateSpanText("currentDeposit",depositNumber);
  updateSpanText("currentBalance",depositNumber);

/*
  const currentBalance=document.getElementById('currentBalance').innerText;
   const currentBalanceNumber=parseFloat(currentBalance);
   const totalBalance=depositNumber + currentBalanceNumber;
   document.getElementById('currentBalance').innerText=totalBalance;
   */
  document.getElementById('depositAmount').value='';
})

//withdraw button event handler
const withdrawtBtn=document.getElementById('addWithdraw');
withdrawtBtn.addEventListener('click',function(){
    const withdrawNumber=getInputNumber('withdrawAmount');
   updateSpanText('currentWithdraw',withdrawNumber);
   updateSpanText('currentBalance',-1*withdrawNumber);
   document.getElementById('withdrawAmount').value='';
})

function getInputNumber(id){
    const withdrawAmount=document.getElementById(id).value;
    const withdrawNumber=parseFloat(withdrawAmount);
    return withdrawNumber;
}

function updateSpanText(id,depositNumber){
    const current=document.getElementById(id).innerText;
    const currentNumber=parseFloat(current);
    const totalAmount=depositNumber + currentNumber;
    document.getElementById(id).innerText=totalAmount;
}