function getData() {
    var origin = document.getElementById('origem').value
    var destiny = document.getElementById('destino').value
    var plan = document.getElementById('plano').value
    var minutes = document.getElementById('minutos').value
  
    const result = document.querySelector('#resultPlan')
    const resultNoPlan = document.querySelector('#resultNoPlan')
  
    if (origin === '011' && destiny === '016') {
      const valueMin = 1.9
      const newValueMin = (valueMin * 1.1)
      const priceNoPlan = (minutes * valueMin)
      resultNoPlan.innerHTML = 'R$' + priceNoPlan.toFixed(2);
  
      document.getElementById('btnContratar').style.display = 'block';
      document.getElementById('msgError').style.display = 'none';
      document.getElementById('msgError2').style.display = 'none';
  
      if (plan === 'FaleMais 30') {
        if (minutes > 30) {
          const minutesPlus = (minutes - 30)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
  
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
      else if (plan === 'FaleMais 60') {
        if (minutes > 60) {
          const minutesPlus = (minutes - 60)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
      else if (plan === 'FaleMais 120') {
        if (minutes > 120) {
          const minutesPlus = (minutes - 120)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
    } //fecha primeiro plano 
  
    else if (origin === '016' && destiny === '011') {
      const valueMin = 2.9
      const newValueMin = (valueMin * 1.1)
      const priceNoPlan = (minutes * valueMin)
      resultNoPlan.innerHTML = 'R$' + priceNoPlan.toFixed(2);
  
      document.getElementById('btnContratar').style.display = 'block';
      document.getElementById('msgError').style.display = 'none';
      document.getElementById('msgError2').style.display = 'none';
  
      if (plan === 'FaleMais 30') {
        if (minutes > 30) {
          const minutesPlus = (minutes - 30)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
      else if (plan === 'FaleMais 60') {
        if (minutes > 60) {
          const minutesPlus = (minutes - 60)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
      else if (plan === 'FaleMais 120') {
        if (minutes > 120) {
          const minutesPlus = (minutes - 120)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
  
    } // fecha segundo plano 
  
    else if (origin === '011' && destiny === '017') {
      const valueMin = 1.7
      const newValueMin = (valueMin * 1.1)
      const priceNoPlan = (minutes * valueMin)
      resultNoPlan.innerHTML = 'R$' + priceNoPlan.toFixed(2);
  
      document.getElementById('btnContratar').style.display = 'block';
      document.getElementById('msgError').style.display = 'none';
      document.getElementById('msgError2').style.display = 'none';
  
      if (plan === 'FaleMais 30') {
        if (minutes > 30) {
          const minutesPlus = (minutes - 30)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
      else if (plan === 'FaleMais 60') {
        if (minutes > 60) {
          const minutesPlus = (minutes - 60)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
      else if (plan === 'FaleMais 120') {
        if (minutes > 120) {
          const minutesPlus = (minutes - 120)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
  
    } // fecha terceiro plano 
  
    else if (origin === '017' && destiny === '011') {
      const valueMin = 2.7
      const newValueMin = (valueMin * 1.1)
      const priceNoPlan = (minutes * valueMin)
      resultNoPlan.innerHTML = 'R$' + priceNoPlan.toFixed(2);
  
      document.getElementById('btnContratar').style.display = 'block';
      document.getElementById('msgError').style.display = 'none';
      document.getElementById('msgError2').style.display = 'none';
  
      if (plan === 'FaleMais 30') {
        if (minutes > 30) {
          const minutesPlus = (minutes - 30)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
      else if (plan === 'FaleMais 60') {
        if (minutes > 60) {
          const minutesPlus = (minutes - 60)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
      else if (plan === 'FaleMais 120') {
        if (minutes > 120) {
          const minutesPlus = (minutes - 120)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
  
    } // fecha quarto plano
  
    else if (origin === '011' && destiny === '018') {
      const valueMin = 0.9
      const newValueMin = (valueMin * 1.1)
      const priceNoPlan = (minutes * valueMin)
      resultNoPlan.innerHTML = 'R$' + priceNoPlan.toFixed(2);
  
      document.getElementById('btnContratar').style.display = 'block';
      document.getElementById('msgError').style.display = 'none';
      document.getElementById('msgError2').style.display = 'none';
  
      if (plan === 'FaleMais 30') {
        if (minutes > 30) {
          const minutesPlus = (minutes - 30)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
      else if (plan === 'FaleMais 60') {
        if (minutes > 60) {
          const minutesPlus = (minutes - 60)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
      else if (plan === 'FaleMais 120') {
        if (minutes > 120) {
          const minutesPlus = (minutes - 120)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
  
    } // fecha quinto plano 
  
    else if (origin === '018' && destiny === '011') {
      const valueMin = 1.9
      const newValueMin = (valueMin * 1.1)
      const priceNoPlan = (minutes * valueMin)
      resultNoPlan.innerHTML = 'R$' + priceNoPlan.toFixed(2);
  
      document.getElementById('btnContratar').style.display = 'block';
      document.getElementById('msgError').style.display = 'none';
      document.getElementById('msgError2').style.display = 'none';
  
      if (plan === 'FaleMais 30') {
        if (minutes > 30) {
          const minutesPlus = (minutes - 30)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
      else if (plan === 'FaleMais 60') {
        if (minutes > 60) {
          const minutesPlus = (minutes - 60)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
      else if (plan === 'FaleMais 120') {
        if (minutes > 120) {
          const minutesPlus = (minutes - 120)
          const pricePlan = minutesPlus * newValueMin
          result.innerHTML = 'R$' + pricePlan.toFixed(2);
        } else {
          result.innerHTML = 'R$0.00';
        }
      }
    } // fecha sexto plano 
  
    else {
      //se o plano nao existir zera o valor, exibe a mensagem de error e esconde o botao
      result.innerHTML = 'R$0.00';
      resultNoPlan.innerHTML = 'R$0.00';
  
      document.getElementById('msgError').style.display = 'block';
      document.getElementById('msgError2').style.display = 'block';
      document.getElementById('btnContratar').style.display = 'none';
    }
  
    //retorno falso para nao atualizar a pagina
    return false;
  }
  
  $(document).ready(function () {
    $("#myForm").bind("submit", getData);
  });
  