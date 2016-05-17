# MongoDBx_M101x-
------
Códigos baseados no curso MongoDBx: M101x .

estados-cidades.json proveniente de : https://gist.github.com/letanure/3012978

Uso durante desenvolvimento:
------

$ mongod --dbpath $PATH

FIX: $ npm run watch

$ node index.js

Formato da requisição:
------
Ex:

* http://localhost:3000/api/v1/estados
* http://localhost:3000/api/v1/estados/Amazonas
* http://localhost:3000/api/v1/estados/Amazonas/cidades


Formato da resposta:
------
* **Exemplo de requisição 1:**
```javascript
[
  {
    "sigla": "AC",
    "nome": "Acre",
    "cidades": [
      "Acrelândia",
      "Assis Brasil",
      "Brasiléia",
      "Bujari",
      "Capixaba",
      "Cruzeiro do Sul",
      "Epitaciolândia",
      "Feijó",
      "Jordão",
      "Mâncio Lima",
      "Manoel Urbano",
      "Marechal Thaumaturgo",
      "Plácido de Castro",
      "Porto Acre",
      "Porto Walter",
      "Rio Branco",
      "Rodrigues Alves",
      "Santa Rosa do Purus",
      "Sena Madureira",
      "Senador Guiomard",
      "Tarauacá",
      "Xapuri"
    ]
  },
  // Próximas ocorrencias no mesmo formato
  ```

* **Exemplo de requisição 2:**

  ```javascript
  {
    "sigla": "AM",
    "nome": "Amazonas",
    "cidades": [
      "Alvarães",
      "Amaturá",
      "Anamã",
      "Anori",
      "Apuí",
      "Atalaia do Norte",
      "Autazes",
      "Barcelos",
      "Barreirinha",
      "Benjamin Constant",
      "Beruri",
      "Boa Vista do Ramos",
      "Boca do Acre",
      "Borba",
      "Caapiranga",
      "Canutama",
      "Carauari",
      "Careiro",
      "Careiro da Várzea",
      "Coari",
      "Codajás",
      "Eirunepé",
      "Envira",
      "Fonte Boa",
      "Guajará",
      "Humaitá",
      "Ipixuna",
      "Iranduba",
      "Itacoatiara",
      "Itamarati",
      "Itapiranga",
      "Japurá",
      "Juruá",
      "Jutaí",
      "Lábrea",
      "Manacapuru",
      "Manaquiri",
      "Manaus",
      "Manicoré",
      "Maraã",
      "Maués",
      "Nhamundá",
      "Nova Olinda do Norte",
      "Novo Airão",
      "Novo Aripuanã",
      "Parintins",
      "Pauini",
      "Presidente Figueiredo",
      "Rio Preto da Eva",
      "Santa Isabel do Rio Negro",
      "Santo Antônio do Içá",
      "São Gabriel da Cachoeira",
      "São Paulo de Olivença",
      "São Sebastião do Uatumã",
      "Silves",
      "Tabatinga",
      "Tapauá",
      "Tefé",
      "Tonantins",
      "Uarini",
      "Urucará",
      "Urucurituba"
    ]
  }
  ```

* **Exemplo de requisição 3:**
    ```javascript
    [
      "Alvarães",
      "Amaturá",
      "Anamã",
      "Anori",
      "Apuí",
      "Atalaia do Norte",
      "Autazes",
      "Barcelos",
      "Barreirinha",
      "Benjamin Constant",
      "Beruri",
      "Boa Vista do Ramos",
      "Boca do Acre",
      "Borba",
      "Caapiranga",
      "Canutama",
      "Carauari",
      "Careiro",
      "Careiro da Várzea",
      "Coari",
      "Codajás",
      "Eirunepé",
      "Envira",
      "Fonte Boa",
      "Guajará",
      "Humaitá",
      "Ipixuna",
      "Iranduba",
      "Itacoatiara",
      "Itamarati",
      "Itapiranga",
      "Japurá",
      "Juruá",
      "Jutaí",
      "Lábrea",
      "Manacapuru",
      "Manaquiri",
      "Manaus",
      "Manicoré",
      "Maraã",
      "Maués",
      "Nhamundá",
      "Nova Olinda do Norte",
      "Novo Airão",
      "Novo Aripuanã",
      "Parintins",
      "Pauini",
      "Presidente Figueiredo",
      "Rio Preto da Eva",
      "Santa Isabel do Rio Negro",
      "Santo Antônio do Içá",
      "São Gabriel da Cachoeira",
      "São Paulo de Olivença",
      "São Sebastião do Uatumã",
      "Silves",
      "Tabatinga",
      "Tapauá",
      "Tefé",
      "Tonantins",
      "Uarini",
      "Urucará",
      "Urucurituba"
    ]
    ```
