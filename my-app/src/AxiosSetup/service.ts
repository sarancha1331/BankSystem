import { Axios } from "axios";

export class AxiosBase {
    public axios: Axios;

    constructor() {
        this.axios = require("axios");
    }
}

//
///////////////////////////////////////////////////////////////////////////////
/////                                                                     /////
/////                          Методы WebApi                              /////
/////                                                                     /////
///////////////////////////////////////////////////////////////////////////////
//

export class UsersService {
    static urlBase = "http://localhost:44770/api/";
    static AxiosBase = new AxiosBase();

    //UsersController/Test1
    static async TestJson(): Promise<User[]> {
        debugger;
        const url = this.urlBase + "Users/Test1";
        const response = await this.AxiosBase.axios.get(url);
        console.log(response);
        return response.data as User[];
    }

    //UsersController/Test1
    static async Test1(): Promise<User[]> {
        const url = this.urlBase + "Users/Test1";
        const response = await this.AxiosBase.axios.get(url);
        return response.data as User[];
    }

    //UsersController/Test2
    static async Test2() {
        const url = this.urlBase + "Users/Test2";
        const response = await this.AxiosBase.axios.get(url);
        return response.data;
    }

    //UsersController/Test3
    static async Test3() {
        const url = this.urlBase + "Users/Test3";
        const response = await this.AxiosBase.axios.get(url);
        return response.data;
    }

    //UsersController/Test4
    static async Test4() {
        const number1 = 123;

        const url = this.urlBase + "Users/Test4";
        const response = await this.AxiosBase.axios.get(url,);
        return response.data;
    }

    //UsersController/Test5
    static async Test5() {
        const url = this.urlBase + "Users/Test5";

        const param = {
            aaa: 123123
        };

        const response = await this.AxiosBase.axios.get(url, { params: param });


        return response.data;
    }

    //UsersController/Test6
    static async Test6() {
        const url = this.urlBase + "Users/Test6";

        const data = new User({
            Id: 1111,
            Name: "qweqweq",
            Age: 123123,
        })

        const response = await this.AxiosBase.axios.post(url, data);

        return response.data;
    }
}

//
///////////////////////////////////////////////////////////////////////////////
/////                                                                     /////
/////                        КОНЕЦ МЕТОДОВ WebApi                         /////
/////                                                                     /////
///////////////////////////////////////////////////////////////////////////////
//

//Модели
export class User {
    /** Id */
    'Id'?: number;

    /** Имя */
    'Name'?: string;

    /** Возраст */
    'Age'?: number;

    constructor(data: undefined | any = {}) {
        this['Id'] = data['Id'];
        this['Name'] = data['Name'];
        this['Age'] = data['Age'];
    }

    public static validationModel = {};
}