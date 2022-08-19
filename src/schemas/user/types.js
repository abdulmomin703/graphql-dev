export const UserTypes = `
    type User {
        _id: ID!
        username: String!
        pets: [Pet]!
        createdAt: String!
        password: String!
        profilePic: String
    }

    input addUserInput {
        username: String!
        password: String!
        profilePic: Upload!
    }

    input loginInput {
        username: String!
        password: String!
    }

    type returnUser {
        user : User!
        token: String!
    }

    extend type Query {
        getAllUsers : [User]!
        getUser(id:ID!) : User 
        login(input:loginInput!) : returnUser  
    }

    extend type Mutation {
        addUser(input: addUserInput!) : returnUser
    }
`;
