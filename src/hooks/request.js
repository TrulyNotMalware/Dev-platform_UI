import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";

export default function (url, methods, config) {
  const mod_axios = axios.create();
  const dispatch = useDispatch();

  //https://github.com/axios/axios#example
  //default Settings.
  mod_axios.defaults.headers.post["Accept"] = "application/json";
  mod_axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
  mod_axios.defaults.headers.post["Content-Type"] =
    "application/json;charset=UTF-8";
  mod_axios.defaults.timeout = 2500;

  mod_axios.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  mod_axios.interceptiors.response.use(
    (config) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
