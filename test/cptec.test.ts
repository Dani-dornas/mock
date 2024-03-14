import Cptec from "../src/services/Cptec";
import api from "../src/services/api";

jest.mock("../src/services/api", () => {
    return {
        get: jest.fn().mockResolvedValue({ data: "response data" })
    };
});

describe("Testes unitarios classe Cptec", () =>{
    it("lista Cidades", async () => {
        const cptec = new Cptec();
        const cidade = "Santa Branca";
        await cptec.listaCidades(cidade);

        expect(api.get).toHaveBeenCalledWith(`/listaCidades?city=${cidade.toLocaleLowerCase()}`);
    });

    it("previsao", async () => {
        const cptec = new Cptec();
        await cptec.previsao("4528");

        expect(api.get).toHaveBeenCalledWith(`/cidade/4528/previsao.xml`);
    });
})