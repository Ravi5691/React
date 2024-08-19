// all these signin or signup are provided in appwrite noes we can check it but some js is change in this code for better functionality. 

import confg from '../envImport/confg';

import {Client , Account , ID } from "appwrite";

// we can use class and constructor method for better code functionality or practices.

export class AuthService {
    client = new Client();
    account ; 
    
    // constructor is a special method which is for initializing the class component.
    constructor(){
        this.client // this is use for giving the reference of client.
            .setEndpoint(confg.appwriteurl)
            .setProject(confg.appwriteProjectId);
        this.account = new Account(this.client);
            
    }
    // we can exactly write the code for account from appwrite docs we do't want dependences means if we want run this project with other service provider so min-min  problem arise.
    async createAccount({email ,password , name}){
        // this account creation can be failed so we take it in try catch.
        try {
            const userAccount = await this.account.create( ID.unique() , email , password , name);
            if(userAccount){ 
                // call another method
                return this.login({email , password}) ; 
            } else {
                return userAccount;
            }
        }catch (error){
                throw error;
            }
    }

    async logIn ({email , password}){
        try {
           return
            await this.account.createEmailPasswordSession(email , password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser (){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error" , error);
        }
        return null;
    }

    async logOut (){
        try {
            await this.account.deleteSessions('current');
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error" , error);
        }
    }
}


const authService = new AuthService();


export default authService;