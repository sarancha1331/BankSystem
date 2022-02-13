//
///////////////////////////////////////////////////////////////////////////////
/////                                                                     /////
/////                      Инструкция по маршрутизации                    /////
/////                                                                     /////
///////////////////////////////////////////////////////////////////////////////
//

import { Axios } from "axios";

//Test+Service - описание контроллера на беке который должен называться Test+Controller
class TestService {

    //Экземпляр для работы с HTTP
    private axiosExample = require("axios") as Axios;

    //Адрес серверной части
    static urlBase = "http://localhost:44770/api/";

    //Пример обьявления маршрута для контроллера TestController
    //Маршрутизация для метода Test1 без параметров
    //Метод возвращает массив number
    //Тип HTTP запроса - GET
    static async Test1(): Promise<number[]> {                           //После : указывается тип возвращаемого значения во View
        const url = this.urlBase + "Users/Test1";                       //url маршрута
        //const response = await this.axiosExample.get(url);            //Get запрос на сервер и получение ответа в переменную response
        //return response.data as User[];                               //Возвращение массива юзеров
        return [] as number[];
    }

    //Пример обьявления маршрута для контроллера TestController
    //Маршрутизация для метода Test2 С ПАРАМЕТРАМИ
    //Метод возвращает string
    //Тип HTTP запроса - GET
    static async Test2(): Promise<string> {                             //После : указывается тип возвращаемого значения во View
        const url = this.urlBase + "Users/Test2";                       //url маршрута

        //В скобках метода нужно принять набор параметров из View. Param - заглушка
        const param = {
            aaa: 123123
        };

        //const response = await this.axiosExample.get(url, { params: param });  //Такая запись отправки параметров работает только для GET запросов!!!!
        //return response.data;                                                  //Возвращаем результат в виде string
        return "123 123 123";
    }

    //Пример обьявления маршрута для контроллера TestController
    //Маршрутизация для метода Test3 С ПАРАМЕТРАМИ
    //Метод возвращает true
    //Тип HTTP запроса - POST
    static async Test3(): Promise<boolean> {
        const url = this.urlBase + "Users/Test3";

        /* В скобках метода нужно принять набор параметров из View. data - заглушка
        const data = new User({
            Id: 1111,
            Name: "qweqweq",
            Age: 123123,
        })
        */

        //const response = await this.AxiosBase.axios.post(url, data);          //Такая запись отправки параметров работает только для POST запросов!!!! 

        return true;
    }
}

//Пример модели/параметра
//export class TestUser {
class TestUser {
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