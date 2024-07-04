<?php

use App\Controllers\Home;
use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', [Home::class, 'index']);
$routes->get('/result/experiences', [Home::class, 'getDataExperiences']);
$routes->get('/result/educations', [Home::class, 'getDataEducation']);
