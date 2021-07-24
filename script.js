// openModal
function openModal(id) {
  document.getElementById(id).classList.remove('hide')
}

// closeModal
function closeModal(id) {
  document.getElementById(id).classList.add('hide')
}

// save customer
function saveCustomer() {
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let tel = document.getElementById('tel').value
  let address = document.getElementById('address').value
  let cpf = document.getElementById('cpf').value

  if (
    name !== '' &&
    email !== '' &&
    tel !== '' &&
    address !== '' &&
    cpf !== ''
  ) {
    let customerData = {
      name,
      email,
      tel,
      address,
      cpf
    }
    customerData = JSON.stringify(customerData)
    if (localStorage.getItem(cpf)) {
      alert('Este cliente já existe')
    } else {
      localStorage.setItem(cpf, customerData)
      alert('Cliente cadastrado com sucesso')
      document.getElementById('customer-form').reset()
      closeModal('modal-customer')
    }
  } else {
    alert('Preencha todos os campos')
  }
}

// save product
function saveProduct() {
  let id = document.getElementById('id').value
  let productname = document.getElementById('product-name').value
  let tag = document.getElementById('tag').value
  let amount = document.getElementById('amount').value

  if (id !== '' && productname !== '' && tag !== '' && amount !== '') {
    let productData = {
      id,
      productname,
      tag,
      amount
    }
    productData = JSON.stringify(productData)
    if (localStorage.getItem(id)) {
      alert('Este produto já existe')
    } else {
      localStorage.setItem(id, productData)
      alert('Produto cadastrado com sucesso')
      document.getElementById('product-form').reset()
      closeModal('modal-product')
    }
  } else {
    alert('Preencha todos os campos')
  }
}
