var app = new function() {
  this.el = document.getElementById('nombre');
  this.ep = document.getElementById('apellido');
  this.nombre = ['Cesar', 'Bill'];
  this.apellido = ['Acuña', 'Gates'];
  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'country';
    if (data) {
      if (data > 1) {
        name = 'personas';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };
  
  this.FetchAll = function() {
    var data = '';
    if (this.nombre.length > 0) {
      for (i = 0; i < this.nombre.length; i++) {
        data += '<tr>';
        data += '<td>' + this.nombre[i] + ' '+ this.apellido[i] + '</td>';
        data += '<td><button class="pure-button" onclick="app.Edit(' + i + ')">Editar</button></td>';
        data += '<td><button class="pure-button" onclick="app.Delete(' + i + ')">Eliminar</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.nombre.length);
    return this.el.innerHTML = data;
  };
  this.Add = function () {
    el = document.getElementById('add-name');
    ep = document.getElementById('add-lastname');

    var country = el.value;
    var ape = ep.value;
    if (country) {
      this.nombre.push(country.trim());
      el.value = '';
      this.FetchAll();
    }
     if (ape) {
      this.apellido.push(ape.trim());
      ep.value = '';
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    var el = document.getElementById('edit-name');
    el.value = this.nombre[item];
    var ep = document.getElementById('edit-lastname');
    ep.value = this.apellido[item];
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      var country = el.value;
      var ape = ep.value;
      if (country) {
        self.nombre.splice(item, 1, country.trim());
        self.FetchAll();
        CloseInput();
      }
      if (country) {
        self.apellido.splice(item, 1, ape.trim());
        self.FetchAll();
        CloseInput();
      }
    }
  };
  this.Delete = function (item) {
    this.nombre.splice(item, 1);
    this.FetchAll();
  };
  
}
app.FetchAll();
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}