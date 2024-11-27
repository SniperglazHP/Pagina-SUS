// routes/userRoutes.js
const express = require('express');
const Alumno = require('./empleados/models');
const Profesor = require('./jefes/models');
const Materias = require('./menu/models');

const router = express.Router();

const configbaseRoutes = require('../../routes/baseRoutes');

module.exports = function(app) {
    configbaseRoutes(router, {
        moduleName: 'escolares/empleados',
        view_list: 'list',
        view_form: 'form',
        view_create: 'create',
        view_edit: 'edit',
        model: Alumno,
        route: '/empleados',
        title: 'Empleados'
    });
    configbaseRoutes(router, {
        moduleName: 'escolares/jefes',
        view_list: 'list',
        view_form: 'form',
        view_create: 'create',
        view_edit: 'edit',
        model: Profesor,
        route: '/jefes',
        title: 'Jefes'
    });
    configbaseRoutes(router, {
        moduleName: 'escolares/menu',
        view_list: 'list',
        view_form: 'form',
        view_create: 'create',
        view_edit: 'edit',
        model: Materias,
        route: '/menu',
        title: 'Menu'
    });

    app.use(`/menu`, router);
};