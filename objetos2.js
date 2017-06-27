//Ejercicio 1
function ejercicio1 (numInicial, numFinal){
   var objeto = {
    inicio: numInicial,
    fin: numFinal,
    suma: function (){
      var resultado = 0;
      for (var i = this.inicio; i <= this.fin; i++){
      resultado = resultado + i;
      }
      return resultado;
     }
  };
  return objeto.suma();
}
//console.log(ejercicio1(1, 10));


//Ejercicio 2
function ejercicio2 (nombre, edad, ocupacion, genero){
    function superCoder (nombre, edad, ocupacion, genero){
      this.nombre = nombre;
      this.edad = edad;
      this.ocupacion = ocupacion;
      this.genero = genero;
      this.mensaje = function(){
        if (evaluando.nombre!=null && evaluando.edad > 17 && evaluando.ocupacion.toLowerCase() == "estudiante laboratoria"||evaluando.ocupacion.toLowerCase() =="web developer" && evaluando.genero.toLowerCase()=='femenino'){
           var respuesta = 'You are awesome';
        } else {
          var respuesta = 'Upsiii';
        }
        return respuesta;
      }
    }
    var evaluando = new superCoder(nombre, edad, ocupacion, genero);
  return evaluando.mensaje();
}
    
//console.log(ejercicio2('Tamara', 22, 'Estudiante Laboratoria', 'femenino'));

//Ejercicio 3
function arr (arreglo){
  var texto = {
    propiedad1: arreglo[0],
    propiedad2: arreglo[1],
    propiedad3: arreglo[2],
    propiedad4: arreglo[3],
    propiedad5: arreglo[4],
    propiedad6: arreglo[5],
    concatenarTexto: function(){
       return "Propiedad1-->"+this.propiedad1+';'+"Propiedad2-->"+this.propiedad2+';'+"Propiedad3-->"+this.propiedad3+';'+"Propiedad4-->"+this.propiedad4+';'+"Propiedad5-->"+this.propiedad5+';'+"Propiedad6-->"+this.propiedad6;
     }
  };
  return texto.concatenarTexto();
}
console.log(arr([6, 5, 4, 3, 2, 1]));


//Ejercicio 4
function ejercicio4(nombre, apellido, edad, genero, ciudad, pais){
    function pacientes (nombre, apellido, edad, genero, ciudad, pais){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.ciudad = ciudad;
    this.pais = pais;

    this.ficha  = function(){
      return 'Nombre: '+registro.nombre+' '+registro.apellido + '\n'+'Edad: '+registro.edad+'\n'+'País: '+registro.pais;
    }
  }
  var registro = new pacientes(nombre, apellido, edad, genero, ciudad, pais);
  return registro.ficha();
}
//console.log(ejercicio4('Blanca', 'Perez', 19, 'Femenino', "Santiago", "Chile"));

//Pruebas Unitarias

var assert = require('assert');

describe('Ejercicios Objetos II', function(){
//Ejercicio 1
    describe('Ejercicio 1', function(){
        it('Prueba de 1 y 10', function(){
            assert.equal(55, ejercicio1(1, 10));
        });
        it('Prueba de 10 y 999', function(){
            assert.equal(499455, ejercicio1(10, 999));
        });
    
    });
    
    //Ejercicio 2 
    describe('Ejercicio 2', function(){
        it('Prueba de mayor que 17', function(){
            assert.equal('Upsiii', ejercicio2('Tamara', 16, 'Estudiante Laboratoria', 'femenino'));
        });
        it('Prueba de mayor que 17', function(){
            assert.equal('You are awesome', ejercicio2('Aydee', 22, 'Estudiante Laboratoria', 'femenino'));
        });
        it('Prueba de mayor que 17', function(){
            assert.equal('You are awesome', ejercicio2('Milagros', 18, 'web developer', 'FEMENINO'));
        });
        it('Prueba de mayor que 17', function(){
            assert.equal('Upsiii', ejercicio2('EVELIN', 11, 'ESTUDIANTE LABORATORIA', 'femenino'));
        });


    });
    
    //Ejercicio 3 
    describe('Ejercicio 3', function(){
        it('Prueba de arrays', function(){
            assert.equal("Propiedad1-->6;Propiedad2-->5;Propiedad3-->4;Propiedad4-->3;Propiedad5-->2;Propiedad6-->1", arr([6, 5, 4, 3, 2, 1]));
        });
        it('Prueba de arrays', function(){
            assert.equal("Propiedad1-->10;Propiedad2-->9;Propiedad3-->8;Propiedad4-->7;Propiedad5-->6;Propiedad6-->5", arr([10, 9, 8, 7, 6, 5]));
        });
    });
    
    //Ejercicio 4 
    describe('Ejercicio 4', function(){
        it('Registro de pacientes', function(){
            assert.equal("Nombre: Blanca Perez\nEdad: 19\nPaís: Chile", ejercicio4('Blanca', 'Perez', 19, 'Femenino', "Santiago", "Chile"));
        });
        it('Registro de pacientes', function(){
            assert.equal("Nombre: Carina Mendoza\nEdad: 25\nPaís: Peru", ejercicio4('Carina', 'Mendoza', 25, 'Femenino', "Arequipa", "Peru"));
        });

    });
    
    
});