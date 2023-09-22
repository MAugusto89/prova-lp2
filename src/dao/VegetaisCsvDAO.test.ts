import { VegetaisCsvDao } from "./VegetableCsvDAO";

let vegetaisDao: VegetaisCsvDao;

describe(" Test over VegetaisCsvDao", () => {
  beforeAll(() => {
    vegetaisDao = new VegetaisCsvDao();
  });

  it("Should retrieve a vegetable by its id and validate their IDs and benefits", () => {
    const id = vegetaisDao.findVegetaisById("24");
    expect(id?.name).toBe("Poupa de Maracujá");
    expect(id?.benefits).toBe('"Ajuda emagrecer');
  });

  it("Should retrieve vegetables by initial letter and validate their IDs", () => {
    const letrasIniciais = "al";
    const idEsperados = ["5", "6", "7", "8"];

    const vegetaisArr = vegetaisDao.findVegetaisByInitialLetter(letrasIniciais);

    // Verifica se a matriz filtrada contém pelo menos um vegetal
    expect(vegetaisArr.length).toBeGreaterThan(0);

    // Verifica se todos os vegetais na matriz filtrada começam com a letra "al"
    const comcecaCom = vegetaisArr.every((vegetal) =>
      vegetal.name.toLowerCase().startsWith(letrasIniciais.toLowerCase())
    );
    expect(comcecaCom).toBe(true);

    // Verifica se os IDs de cada vegetal correspondem aos esperados
    const confereId = vegetaisArr.every((vegetal) =>
      idEsperados.includes(vegetal.id)
    );
    expect(confereId).toBe(true);
  });

  it("Should retrieve vegetables by their benefits and validate their IDs", () => {
    const benefits = "Ajuda emagrecer";
    const idEsperados = [
      "2",
      "3",
      "12",
      "13",
      "14",
      "15",
      "17",
      "19",
      "20",
      "21",
      "24",
      "26",
      "27",
      "28",
      "29",
    ];

    const vegetaisArr = vegetaisDao.findVegetaisByBenefits(benefits);

    // Verifica se pelo menos um vegetal com o benefício foi encontrado
    expect(vegetaisArr.length).toBeGreaterThan(0);

    // Verifica se todos os vegetais encontrados têm o benefício especificado
    const temBeneficio = vegetaisArr.every((vegetal) =>
      vegetal.benefits.toLowerCase().includes(benefits.toLowerCase())
    );
    expect(temBeneficio).toBe(true);

    // Verifica se os IDs de cada vegetal correspondem aos esperados
    const confereId = vegetaisArr.every((vegetal) =>
      idEsperados.includes(vegetal.id)
    );
    expect(confereId).toBe(true);
  });
});