import { createStore } from 'vuex'

interface propType {
  [key: string]: string;
}

interface optionType {
  value: string;
  title: string;
}

interface labelType {
  name: string;
  title: string;
}

interface formFieldType {
  title: string;
  name: string;
  type: string;
  props?: propType[];
  options?: optionType[];
  labels?: labelType[];
}

interface formDataType {
  title: string;
  name: string;
  fields: formFieldType[];
}
export { formDataType }

interface ValueType {
  [key: string]: string | object;
}

interface formsValueType {
  name: string;
  values: ValueType;
}
export { formsValueType }
export { ValueType }

export default createStore({
  state: {
    availableForms: [
      {
        "title": "Ответьте на вопросы",
        "name": "form1",
        "fields": [
          {
            "title": "ФИО",
            "name": "fio",
            "type": "input",
            "props": {
              "type": "text",
              "placeholder": "Введите ФИО..."
            }
          },
          {
            "title": "Пол",
            "name": "gender",
            "type": "select",
            "options": [
              {"value": "male", "title": "Мужчина"},
              {"value": "female", "title": "Женщина"},
            ]
          },
          {
            "title": "Транспорт",
            "name": "transport",
            "type": "checkbox",
            "labels": [
              {"name": "car", "title": "Машина"},
              {"name": "boat", "title": "Лодка"}
            ]
          },
          {
            "title": "Опыт",
            "name": "experience",
            "type": "textarea",
            "props": {
              "placeholder": "Опишите ваш опыт...",
              "rows": "5",
              "maxlength": "255"
            }
          }
        ]
      },
      {
        "title": "Регистрация",
        "name": "form2",
        "fields": [
          {
            "title": "Логин",
            "name": "login",
            "type": "input",
            "props": {
              "type": "text",
              "placeholder": "Придумайте логин..."
            }
          },
          {
            "title": "Пароль",
            "name": "password",
            "type": "input",
            "props": {
              "type": "password",
              "placeholder": "Придумайте пароль..."
            }
          }
        ]
      },
      {
        "title": "Викторина",
        "name": "form3",
        "fields": [
          {
            "title": "Что легче кислорода (O)?",
            "name": "lighter-than-air",
            "type": "checkbox",
            "labels": [
              {"name": "h", "title": "Водород (H)"},
              {"name": "ne", "title": "Неон (Ne)"},
              {"name": "b", "title": "Бор (B)"}
            ]
          },
          {
            "title": "Какое самое быстрое животное?",
            "name": "fastest-animal",
            "type": "select",
            "options": [
              {"value": "gepard", "title": "Гепард"},
              {"value": "snail", "title": "Улитка"},
              {"value": "sapsan", "title": "Сапсан"}
            ]
          },
          {
            "title": "Пол",
            "name": "gender",
            "type": "select",
            "options": [
              {"value": "male", "title": "Мужчина"},
              {"value": "female", "title": "Женщина"},
            ]
          },
          {
            "title": "Возраст",
            "name": "age",
            "type": "select",
            "options": [
              {"value": "0-9", "title": "от 0 до 9"},
              {"value": "10-19", "title": "от 10 до 19"},
              {"value": "20-44", "title": "от 20 до 44"},
              {"value": "45-64", "title": "от 45 до 64"}
            ]
          }
        ]
      }
    ] as formDataType[],
    readyFormsValues: [
      {
        "name": "form3",
        "values": {
          "lighter-than-air": ["h","b"],
          "fastest-animal": "sapsan",
          "gender": "male",
          "age": "20-44"
        }
      }
    ] as formsValueType[]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    findSelectedForm({state}, formName: string){
      for(let item of state.availableForms){
        if(item.name == formName){
          return item
        }
      }
    }
  },
  modules: {
  }
})
