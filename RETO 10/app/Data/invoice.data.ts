import { Invoice } from "../model/Invoice";

export const invoiceData: Invoice = {
    id: "001",
    company: {
        ruc: '0504497785001',
        name: 'KrakeDev',
        addres: {
            city: 'Quito',
            principalStreet: 'Juan Pablo Sanz',
            secondaryStreet: "Iniaquito",
            code: 'N-063',
        },
    },
    customer: {
        id: '050449785',
        name: 'Jefferson',
        surname: 'Toaquiza',
        addres: {
            city: 'Latacunga',
            principalStreet: 'Eugenio Espejo',
            secondaryStreet: "El batan",
            code: 'S/N',
        },
    },
    item: [
        {
            id: 1,
            product: {
                id: 22,
                name: 'Pipas',
                price: 0.25,
                description: 'Saladita',
                category: {
                    id: 3,
                    name: 'Golocinas',
                },
            },
            quantity: 5,
        },
        {
            id: 2,
            product: {
                id: 23,
                name: 'Papitas',
                price: 0.50,
                description: 'Ruffles',
                category: {
                    id: 3,
                    name: 'Golocinas',
                },
            },
            quantity: 5,
        },
        {
            id: 3,
            product: {
                id: 24,
                name: 'Doritos',
                price: 0.75,
                description: 'Picantes',
                category: {
                    id: 3,
                    name: 'Golocinas',
                },
            },
            quantity: 5,
        },

    ],
}