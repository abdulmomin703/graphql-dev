export const PetTypes = `

    type Pet {
        _id: ID!
        name: String!
        type: String!
        createdAt: String!
        user: ID!
        picture: String
    }

    input addPet {
        type: String!
        name: String!
        user: ID!
        picture: Upload
    }

    type FileUpload {
        fileLocation: String
    }

    extend type Query {
        getAllPets: [Pet]!
        userGetAllPets(id:String!): [Pet]!
    }

    extend type Mutation {
        addPet(input: addPet!): Pet
    }
`;
