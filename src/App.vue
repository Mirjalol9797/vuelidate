<template>
  <div id="app" class="container">
    <h1>Валидация форм vue 2 и vuelidate</h1>
    <form class="mt-4 form-row" @submit.prevent="validateForm">
      <div class="form-group col-md-6">
        <label for="firstName">Имя</label>
        <input
          type="text"
          id="firstName"
          class="form-control"
          :class="$v.form.firstName.$error ? 'is-invalid' : ''"
          v-model.trim="form.firstName"
        />
        <div
          class="invalid-feedback"
          v-if="$v.form.firstName.$dirty && !$v.form.firstName.required"
        >
          Поле обязательно для заполнения
        </div>
      </div>
      <div class="form-group col-md-6">
        <label for="lastName">Фамилия</label>
        <input
          type="text"
          id="lastName"
          class="form-control"
          :class="$v.form.lastName.$error ? 'is-invalid' : ''"
          v-model.trim="form.lastName"
        />
        <div
          class="invalid-feedback"
          v-if="$v.form.lastName.$dirty && !$v.form.lastName.required"
        >
          Поле обязательно для заполнения
        </div>
      </div>
      <div class="form-group col-md-6">
        <label for="patronymic">Отчество</label>
        <input
          type="text"
          id="patronymic"
          class="form-control"
          :class="$v.form.patronymic.$error ? 'is-invalid' : ''"
          v-model.trim="form.patronymic"
        />
        <div
          class="invalid-feedback"
          v-if="$v.form.patronymic.$dirty && !$v.form.patronymic.required"
        >
          Поле обязательно для заполнения
        </div>
      </div>
      <div class="form-group col-md-6">
        <label for="age">Возраст</label>
        <input
          type="text"
          id="age"
          class="form-control"
          :class="$v.form.age.$error ? 'is-invalid' : ''"
          v-model.trim="form.age"
        />
        <div
          class="invalid-feedback"
          v-if="$v.form.age.$dirty && !$v.form.age.required"
        >
          Поле обязательно для заполнения
        </div>
        <div class="invalid-feedback" v-if="!$v.form.age.numeric">
          Не введите буквенные значения
        </div>
      </div>
      <div class="form-group col-md-6">
        <label for="date">Дата рождения</label>
        <input
          type="date"
          id="date"
          class="form-control"
          :class="$v.form.date.$error ? 'is-invalid' : ''"
          v-model="form.date"
        />
        <div
          class="invalid-feedback"
          v-if="$v.form.date.$dirty && !$v.form.date.required"
        >
          Поле обязательно для заполнения
        </div>
      </div>
      <div class="form-group col-md-6">
        <label for="inn">ИНН</label>
        <input-facade
          type="text"
          id="inn"
          class="form-control"
          :class="$v.form.inn.$error ? 'is-invalid' : ''"
          v-model="form.inn"
          mask="###-###-###"
        />
        <div
          class="invalid-feedback"
          v-if="$v.form.inn.$dirty && !$v.form.inn.required"
        >
          Поле обязательно для заполнения
        </div>
        <div class="invalid-feedback" v-if="!$v.form.inn.numeric">
          Не введите буквенные значения
        </div>
        <div class="invalid-feedback" v-if="!$v.form.inn.minLength">
          Введите 9 значное чисто
        </div>
        <div class="invalid-feedback" v-if="!$v.form.inn.maxLength">
          Введите 9 значное чисто
        </div>
      </div>
      <div class="form-group col-md-6">
        <label for="pinfl">ПИНФЛ</label>
        <input-facade
          type="text"
          id="pinfl"
          :class="$v.form.pinfl.$error ? 'is-invalid' : ''"
          class="form-control"
          v-model="form.pinfl"
          mask="##############"
        />
        <div
          class="invalid-feedback"
          v-if="$v.form.pinfl.$dirty && !$v.form.pinfl.required"
        >
          Поле обязательно для заполнения
        </div>
        <div class="invalid-feedback" v-if="!$v.form.pinfl.minLength">
          Введите 14 значное чисто
        </div>
      </div>
      <div class="form-group col-md-6">
        <label for="phone">Номер телефона</label>
        <input-facade
          type="text"
          id="phone"
          class="form-control"
          :class="$v.form.phone.$error ? 'is-invalid' : ''"
          v-model="form.phone"
          mask="+### (##) ###-##-##"
        />
        <div
          class="invalid-feedback"
          v-if="$v.form.phone.$dirty && !$v.form.phone.required"
        >
          Поле обязательно для заполнения
        </div>
      </div>
      <div class="form-group col-md-6">
        <label for="password">Пароль</label>
        <input
          type="password"
          id="password"
          class="form-control"
          :class="$v.form.password.$error ? 'is-invalid' : ''"
          v-model="form.password"
        />
        <div
          class="invalid-feedback"
          v-if="$v.form.password.$dirty && !$v.form.password.required"
        >
          Поле обязательно для заполнения
        </div>
        <div class="invalid-feedback" v-if="!$v.form.password.minLength">
          Введите не менее 6 число
        </div>
      </div>
      <div class="form-group col-md-6">
        <label for="repeatPassword">Повторите пароль</label>
        <input
          type="password"
          id="repeatPassword"
          class="form-control"
          :class="$v.form.repeatPassword.$error ? 'is-invalid' : ''"
          v-model="form.repeatPassword"
        />
        <div
          class="invalid-feedback"
          v-if="
            $v.form.repeatPassword.$dirty && !$v.form.repeatPassword.required
          "
        >
          Поле обязательно для заполнения
        </div>
        <div class="invalid-feedback" v-if="!$v.form.repeatPassword.minLength">
          Введите не менее 6 число
        </div>
        <div
          class="invalid-feedback"
          v-if="!$v.form.repeatPassword.sameAsPassword"
        >
          Пароли не совпадають
        </div>
      </div>

      <button type="submit" class="btn btn-success col-12 mb-5">
        Click me
      </button>
      <div
        class="alert-success col-12 p-2"
        v-if="!this.$v.form.$error && this.$v.form.$dirty"
      >
        Все ок
      </div>
      <div v-else-if="this.$v.form.$error" class="alert-danger col-12 p-2">
        Есть пару ошибок
      </div>
    </form>
  </div>
</template>

<script>
import {
  required,
  numeric,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";

export default {
  name: "App",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        patronymic: "",
        age: "",
        date: "",
        inn: "",
        pinfl: "",
        phone: "",
        password: "",
        repeatPassword: "",
      },
    };
  },
  validations: {
    form: {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      patronymic: {
        required,
      },
      age: {
        numeric,
        required,
      },
      date: {
        required,
      },
      inn: {
        required,
        numeric,
        minLength: minLength(9),
        maxLength: maxLength(9),
      },
      pinfl: {
        required,
        minLength: minLength(14),
      },
      phone: {
        required,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      repeatPassword: {
        required,
        minLength: minLength(6),
        sameAsPassword: sameAs("password"),
      },
    },
  },
  methods: {
    validateForm() {
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        console.log("Все ок");
      }
    },
  },
  mounted() {},
};
</script>

<style>
.input-error {
  border-color: red;
}
.invalid-feedback {
  display: block;
}
</style>
