<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index(): string
    {
        $data = ['title' => "Resume - Hosea Leonardo"];
        return view('home/index', $data);
    }

    public function getDataExperiences()
    {
        $path = FCPATH . 'data\experiences.json';


        if (file_exists($path)) {
            $json = file_get_contents($path);
            $data = json_decode($json, true);

            return $this->response->setStatusCode(200)
                ->setJSON($data);
        } else {
            return $this->response->setStatusCode(404)
                ->setBody('File not found');
        }
    }

    public function getDataEducation()
    {
        $path = FCPATH . 'data\educations.json';


        if (file_exists($path)) {
            $json = file_get_contents($path);
            $data = json_decode($json, true);

            return $this->response->setStatusCode(200)
                ->setJSON($data);
        } else {
            return $this->response->setStatusCode(404)
                ->setBody('File not found');
        }
    }
}
