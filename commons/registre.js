import {Get,Post} from 'http.js'

export const registre = p => Post(p,'/number/api/register')
export const registre1 = p => Get(p,'/number/api/register')