import fs from "node:fs/promises";

export const registrar = async (nombre, edad, tipo, color, enfermedad) => {
  // variable de template inicializada.
  let lista;

  try {


    try {
      //Se revisa si existe el archivo previamente:
      await fs.access("citas.json");

      //Si el archivo existe se utiliza como template
      console.log("Fichero Encontrado");
      lista = await fs.readFile("citas.json", "utf-8");
      lista = JSON.parse(lista);
    } catch (error) {
      //Si el archivo no existe, se crea un template desde cero y se agrega la información ingresada por el usuario en el terminal
      console.log("No hay ficheros previos");
      lista = [];
    }

    //Se agrega al template la información ingresada por el usuario en el terminal
    lista.push({
      nombre: nombre,
      edad: edad,
      tipo: tipo,
      color: color,
      enfermedad: enfermedad,
    });

    //Se crea el archivo json con el template.
    await fs.writeFile("citas.json", JSON.stringify(lista, null, lista.length));
    console.log("Sus datos han sido ingresados de manera exitosa");

  } catch (error) {
    //Otros errores serán identificados y presentados en consola.
    console.error(`Hay un problema con la aplicación ${error}`);
  }
};

export const leer = async () => {
  try {
    let listaRead = await fs.readFile("citas.json", "utf-8");
    listaRead = JSON.parse(listaRead);
    console.log(listaRead);
    console.log("\n Lectura de Fichero Existosa");
  } catch (error) {
    console.error(`Error de lectura ${error}`);
  }
};

//Sobreescribe archivo dejando un array vacío (se lee papra corrobar lo anterior).
export const vaciarFichero = async () => {
  await fs.writeFile("citas.json", JSON.stringify([]));
  console.log("Fichero vaciado \n");
  await leer();
};
