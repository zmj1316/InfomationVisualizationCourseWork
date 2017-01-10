import React from 'react';
import ReactDOM from 'react-dom';
const ReactD3 = require('react-d3-components');

const nodes = [{ name: 'fulvio de giovanni', class: 3, type: 0 }, { name: 'marco valleri', class: 2, type: 0 }, { name: 'alberto pelliccione', class: 3, type: 0 }, { name: 'walterandrea furlan', class: 4, type: 0 }, { name: 'massimiliano luppi', class: 1, type: 0 }, { name: 'alessandro lomonaco', class: 4, type: 0 }, { name: 'debora leanza', class: 4, type: 0 }, { name: 'diego giubertoni', class: 3, type: 0 }, { name: 'aldo scaccabarozzi', class: 4, type: 0 }, { name: 'mostapha maana', class: 4, type: 0 }, { name: 'walter furlan', class: 3, type: 0 }, { name: 'serge woon', class: 3, type: 1 }, { name: 'davide romualdi', class: 3, type: 0 }, { name: 'ivan roattino', class: 4, type: 0 }, { name: 'marco fontana', class: 3, type: 0 }, { name: 'federico guerrini', class: 4, type: 0 }, { name: 'sara galvagna', class: 3, type: 0 }, { name: 'massimiliano oldani', class: 4, type: 0 }, { name: 'fabio busatto', class: 2, type: 0 }, { name: 'eugene ho', class: 3, type: 0 }, { name: 'daniele molteni', class: 3, type: 0 }, { name: 'gianluca piani', class: 4, type: 0 }, { name: 'david vincenzetti', class: 1, type: 1 }, { name: 'tomas valentini', class: 4, type: 0 }, { name: 'gianluca vadruccio', class: 3, type: 0 }, { name: 'salvatore rumore', class: 4, type: 0 }, { name: 'simonetta gallucci', class: 2, type: 1 }, { name: 'marco bettini', class: 1, type: 1 }, { name: 'bruno muschitiello', class: 3, type: 0 }, { name: 'valeriano bedeschi', class: 3, type: 0 }, { name: 'massimiliano luppi', class: 1, type: 0 }, { name: 'alessandra mino', class: 3, type: 0 }, { name: 'serge yun', class: 4, type: 0 }, { name: 'eva michalikova', class: 4, type: 0 }, { name: 'eduardo pardo', class: 4, type: 0 }, { name: 'costantino imbrauglio', class: 4, type: 0 }, { name: 'matteo oliva', class: 3, type: 0 }, { name: 'danilo cordoni', class: 4, type: 0 }, { name: 'utente test', class: 4, type: 0 }, { name: 'alfredo pesoli', class: 4, type: 0 }, { name: 'guido landi', class: 3, type: 0 },
{ name: 'stefania iannelli', class: 3, type: 0 }, { name: 'giancarlo russo', class: 1, type: 1 }, { name: 'enrico parentini', class: 3, type: 0 }, { name: 'emad shehata', class: 2, type: 1 }, { name: 'antonio mazzeo', class: 3, type: 0 }, { name: 'alberto ornaghi', class: 2, type: 0 }, { name: 'giovanni cino', class: 3, type: 0 }, { name: 'andrea cariola', class: 4, type: 0 }, { name: 'daniel maglietta', class: 2, type: 1 }, { name: 'fabrizio cornelli', class: 2, type: 0 }, { name: 'gabriele parravicini', class: 4, type: 0 }, { name: 'stefano bagnasco', class: 4, type: 0 }, { name: 'cristian vardaro', class: 3, type: 0 }, { name: 'antonella capaldo', class: 2, type: 1 }, { name: 'sergio solis', class: 3, type: 0 }, { name: 'sergio rodriguez', class: 4, type: 0 }, { name: 'annalisa mangiacavalli', class: 4, type: 0 }, { name: 'luca guerra', class: 3, type: 0 }, { name: 'roby banfi', class: 3, type: 0 }, { name: 'claudio agosti', class: 4, type: 0 }, { name: 'massimiliamo luppi', class: 4, type: 1 }, { name: 'elisabetta ciceri', class: 3, type: 0 }, { name: 'ivan speziale', class: 3, type: 0 }, { name: 'marco losito', class: 3, type: 0 }, { name: 'mauro romeo', class: 2, type: 0 }, { name: 'daniel martinez', class: 4, type: 0 }, { name: 'christian pozzi', class: 3, type: 0 }, { name: 'emanuele placidi', class: 3, type: 0 }, { name: 'eric rabe', class: 3, type: 0 }, { name: 'eros marcon', class: 3, type: 0 }, { name: 'lorenzo invernizzi', class: 3, type: 0 }, { name: 'alex velasco', class: 2, type: 0 }, { name: 'marco catino', class: 3, type: 0 }, { name: 'daniele milan', class: 1, type: 1 }, { name: 'alessandro scarafile', class: 2, type: 0 }, { name: 'john doe', class: 4, type: 0 }, { name: 'philippe vinci', class: 3, type: 0 }, { name: 'lucia rana', class: 2, type: 1 }, { name: 'luca filippi', class: 3, type: 0 }, { name: 'enrico luzzani', class: 3, type: 0 }, { name: 'mostapha maanna', class: 2, type: 0 }, { name: 'antonella citino', class: 4, type: 0 }];

const edges = [{ source: 1, target: 0, distance: 800 }, { source: 2, target: 0, distance: 800 }, { source: 2, target: 1, distance: 665.0 }, { source: 4, target: 0, distance: 566.0 }, { source: 4, target: 2, distance: 800 }, { source: 7, target: 1, distance: 800 }, { source: 7, target: 2, distance: 716.0 }, { source: 10, target: 1, distance: 800 }, { source: 10, target: 4, distance: 800 }, { source: 11, target: 0, distance: 800 }, { source: 11, target: 1, distance: 425.0 }, { source: 11, target: 2, distance: 524.0 }, { source: 11, target: 7, distance: 800 }, { source: 11, target: 10, distance: 800 }, { source: 12, target: 10, distance: 800 }, { source: 18, target: 0, distance: 800 }, { source: 18, target: 1, distance: 345.0 }, { source: 18, target: 2, distance: 694.0 }, { source: 18, target: 4, distance: 800 }, { source: 18, target: 7, distance: 800 }, { source: 18, target: 10, distance: 800 },
 { source: 18, target: 11, distance: 800 }, { source: 18, target: 14, distance: 800 }, { source: 20, target: 1, distance: 800 }, { source: 20, target: 18, distance: 800 }, { source: 22, target: 0, distance: 676.0 }, { source: 22, target: 1, distance: 59.0 }, { source: 22, target: 2, distance: 342.0 }, { source: 22, target: 4, distance: 158.0 }, { source: 22, target: 7, distance: 800 }, { source: 22, target: 10, distance: 800 }, { source: 22, target: 11, distance: 341.0 }, { source: 22, target: 14, distance: 800 }, { source: 22, target: 18, distance: 123.0 }, { source: 24, target: 18, distance: 800 }, { source: 26, target: 0, distance: 598.0 }, { source: 26, target: 1, distance: 800 }, { source: 26, target: 2, distance: 800 }, { source: 26, target: 4, distance: 129.0 }, { source: 26, target: 7, distance: 800 }, { source: 26, target: 10, distance: 482.0 }, { source: 26, target: 11, distance: 644.0 }, { source: 26, target: 12, distance: 800 },
 { source: 26, target: 16, distance: 800 }, { source: 26, target: 18, distance: 800 }, { source: 26, target: 19, distance: 800 }, { source: 26, target: 20, distance: 800 }, { source: 26, target: 22, distance: 58.0 }, { source: 27, target: 0, distance: 646.0 }, { source: 27, target: 1, distance: 800 }, { source: 27, target: 2, distance: 800 }, { source: 27, target: 4, distance: 97.0 }, { source: 27, target: 10, distance: 800 }, { source: 27, target: 11, distance: 650.0 }, { source: 27, target: 12, distance: 800 }, { source: 27, target: 18, distance: 602.0 }, { source: 27, target: 22, distance: 96.0 }, { source: 27, target: 26, distance: 124.0 }, { source: 28, target: 0, distance: 800 }, { source: 28, target: 1, distance: 800 }, { source: 28, target: 2, distance: 800 }, { source: 28, target: 4, distance: 253.0 }, { source: 28, target: 7, distance: 800 }, { source: 28, target: 10, distance: 800 },
  { source: 28, target: 11, distance: 650.0 }, { source: 28, target: 14, distance: 800 }, { source: 28, target: 18, distance: 269.0 }, { source: 28, target: 20, distance: 800 }, { source: 28, target: 22, distance: 800 }, { source: 28, target: 26, distance: 800 }, { source: 28, target: 27, distance: 692.0 },
 { source: 29, target: 0, distance: 800 }, { source: 29, target: 1, distance: 800 }, { source: 29, target: 2, distance: 800 }, { source: 29, target: 4, distance: 800 }, { source: 29, target: 10, distance: 800 }, { source: 29, target: 11, distance: 800 }, { source: 29, target: 18, distance: 299.0 }, { source: 29, target: 22, distance: 152.0 }, { source: 29, target: 26, distance: 768.0 }, { source: 29, target: 27, distance: 800 }, { source: 29, target: 28, distance: 800 }, { source: 31, target: 1, distance: 800 }, { source: 31, target: 4, distance: 800 }, { source: 31, target: 10, distance: 800 }, { source: 31, target: 18, distance: 800 }, { source: 31, target: 19, distance: 800 }, { source: 31, target: 22, distance: 800 }, { source: 31, target: 26, distance: 335.0 }, { source: 31, target: 27, distance: 800 }, { source: 34, target: 26, distance: 800 }, { source: 35, target: 18, distance: 800 },
 { source: 35, target: 22, distance: 800 }, { source: 35, target: 28, distance: 800 }, { source: 35, target: 29, distance: 800 }, { source: 36, target: 1, distance: 800 }, { source: 36, target: 14, distance: 800 }, { source: 36, target: 18, distance: 800 }, { source: 36, target: 22, distance: 800 }, { source: 36, target: 26, distance: 800 }, { source: 40, target: 1, distance: 800 },
 { source: 40, target: 2, distance: 800 }, { source: 40, target: 11, distance: 800 }, { source: 40, target: 18, distance: 800 }, { source: 40, target: 22, distance: 800 }, { source: 40, target: 28, distance: 800 }, { source: 40, target: 29, distance: 800 }, { source: 41, target: 0, distance: 800 }, { source: 41, target: 2, distance: 800 }, { source: 41, target: 4, distance: 483.0 }, { source: 41, target: 22, distance: 800 }, { source: 41, target: 26, distance: 800 }, { source: 41, target: 27, distance: 800 }, { source: 42, target: 0, distance: 800 },
{ source: 42, target: 1, distance: 750.0 }, { source: 42, target: 2, distance: 800 }, { source: 42, target: 4, distance: 75.0 }, { source: 42, target: 10, distance: 800 }, { source: 42, target: 11, distance: 800 }, { source: 42, target: 16, distance: 800 }, { source: 42, target: 18, distance: 484.0 }, { source: 42, target: 22, distance: 53.0 }, { source: 42, target: 26, distance: 60.0 }, { source: 42, target: 27, distance: 133.0 }, { source: 42, target: 28, distance: 779.0 }, { source: 42, target: 29, distance: 800 }, { source: 42, target: 31, distance: 800 }, { source: 42, target: 36, distance: 800 }, { source: 42, target: 40, distance: 800 }, { source: 43, target: 18, distance: 800 }, { source: 44, target: 4, distance: 800 }, { source: 44, target: 10, distance: 457.0 }, { source: 44, target: 11, distance: 800 }, { source: 44, target: 12, distance: 650.0 }, { source: 44, target: 18, distance: 800 },
 { source: 44, target: 22, distance: 267.0 }, { source: 44, target: 26, distance: 67.0 }, { source: 44, target: 27, distance: 96.0 }, { source: 44, target: 28, distance: 800 }, { source: 44, target: 31, distance: 800 }, { source: 44, target: 42, distance: 186.0 }, { source: 45, target: 1, distance: 800 }, { source: 45, target: 2, distance: 800 }, { source: 45, target: 18, distance: 800 },
{ source: 45, target: 22, distance: 190.0 }, { source: 45, target: 26, distance: 800 }, { source: 45, target: 29, distance: 800 }, { source: 45, target: 40, distance: 800 }, { source: 45, target: 42, distance: 800 }, { source: 46, target: 0, distance: 339.0 }, { source: 46, target: 1, distance: 134.0 }, { source: 46, target: 2, distance: 304.0 }, { source: 46, target: 4, distance: 800 }, { source: 46, target: 10, distance: 800 }, { source: 46, target: 11, distance: 280.0 }, { source: 46, target: 12, distance: 800 }, { source: 46, target: 14, distance: 800 }, { source: 46, target: 18, distance: 105.0 }, { source: 46, target: 20, distance: 800 }, { source: 46, target: 22, distance: 58.0 }, { source: 46, target: 26, distance: 721.0 }, { source: 46, target: 27, distance: 473.0 }, { source: 46, target: 28, distance: 800 }, { source: 46, target: 29, distance: 613.0 }, { source: 46, target: 35, distance: 800 },
 { source: 46, target: 36, distance: 800 }, { source: 46, target: 40, distance: 800 }, { source: 46, target: 41, distance: 800 }, { source: 46, target: 42, distance: 377.0 }, { source: 46, target: 45, distance: 355.0 }, { source: 47, target: 1, distance: 800 }, { source: 47, target: 2, distance: 800 }, { source: 47, target: 22, distance: 800 },
{ source: 47, target: 26, distance: 800 }, { source: 47, target: 29, distance: 800 }, { source: 47, target: 42, distance: 800 }, { source: 47, target: 45, distance: 800 }, { source: 47, target: 46, distance: 800 }, { source: 49, target: 1, distance: 800 }, { source: 49, target: 4, distance: 520.0 }, { source: 49, target: 10, distance: 800 }, { source: 49, target: 11, distance: 167.0 }, { source: 49, target: 18, distance: 800 }, { source: 49, target: 19, distance: 800 }, { source: 49, target: 22, distance: 125.0 }, { source: 49, target: 26, distance: 136.0 }, { source: 49, target: 27, distance: 67.0 }, { source: 49, target: 28, distance: 800 }, { source: 49, target: 29, distance: 800 }, { source: 49, target: 31, distance: 800 }, { source: 49, target: 42, distance: 114.0 }, { source: 49, target: 44, distance: 800 }, { source: 50, target: 0, distance: 800 }, { source: 50, target: 1, distance: 195.0 },
{ source: 50, target: 2, distance: 676.0 }, { source: 50, target: 4, distance: 800 }, { source: 50, target: 7, distance: 310.0 }, { source: 50, target: 10, distance: 800 }, { source: 50, target: 11, distance: 342.0 }, { source: 50, target: 12, distance: 800 }, { source: 50, target: 14, distance: 800 }, { source: 50, target: 18, distance: 251.0 }, { source: 50, target: 19, distance: 800 },
 { source: 50, target: 20, distance: 800 }, { source: 50, target: 22, distance: 75.0 }, { source: 50, target: 26, distance: 685.0 }, { source: 50, target: 27, distance: 800 }, { source: 50, target: 28, distance: 535.0 }, { source: 50, target: 31, distance: 800 }, { source: 50, target: 36, distance: 346.0 }, { source: 50, target: 40, distance: 800 }, { source: 50, target: 41, distance: 800 }, { source: 50, target: 42, distance: 474.0 }, { source: 50, target: 43, distance: 800 }, { source: 50, target: 45, distance: 800 }, { source: 50, target: 46, distance: 93.0 }, { source: 50, target: 47, distance: 800 }, { source: 53, target: 4, distance: 800 }, { source: 53, target: 11, distance: 800 }, { source: 53, target: 14, distance: 800 }, { source: 53, target: 18, distance: 254.0 }, { source: 53, target: 20, distance: 800 }, { source: 53, target: 26, distance: 800 }, { source: 53, target: 27, distance: 800 },
  { source: 53, target: 28, distance: 791.0 }, { source: 53, target: 42, distance: 800 }, { source: 53, target: 44, distance: 800 }, { source: 53, target: 46, distance: 762.0 }, { source: 53, target: 50, distance: 704.0 },
{ source: 54, target: 0, distance: 800 }, { source: 54, target: 1, distance: 800 }, { source: 54, target: 2, distance: 800 }, { source: 54, target: 4, distance: 131.0 }, { source: 54, target: 7, distance: 800 }, { source: 54, target: 10, distance: 208.0 }, { source: 54, target: 11, distance: 454.0 }, { source: 54, target: 12, distance: 800 }, { source: 54, target: 14, distance: 800 }, { source: 54, target: 16, distance: 800 }, { source: 54, target: 18, distance: 648.0 }, { source: 54, target: 19, distance: 800 }, { source: 54, target: 20, distance: 800 }, { source: 54, target: 22, distance: 84.0 }, { source: 54, target: 26, distance: 67.0 }, { source: 54, target: 27, distance: 465.0 }, { source: 54, target: 28, distance: 800 }, { source: 54, target: 29, distance: 463.0 }, { source: 54, target: 31, distance: 800 }, { source: 54, target: 36, distance: 800 }, { source: 54, target: 40, distance: 800 },
 { source: 54, target: 41, distance: 800 }, { source: 54, target: 42, distance: 233.0 }, { source: 54, target: 44, distance: 96.0 }, { source: 54, target: 45, distance: 800 }, { source: 54, target: 46, distance: 603.0 }, { source: 54, target: 47, distance: 800 }, { source: 54, target: 49, distance: 204.0 }, { source: 54, target: 50, distance: 250.0 }, { source: 54, target: 53, distance: 800 },
{ source: 58, target: 7, distance: 800 }, { source: 58, target: 18, distance: 800 },
{ source: 58, target: 22, distance: 800 }, { source: 58, target: 26, distance: 800 }, { source: 58, target: 28, distance: 800 }, { source: 58, target: 42, distance: 800 }, { source: 58, target: 46, distance: 800 }, { source: 58, target: 50, distance: 800 }, { source: 58, target: 53, distance: 800 }, { source: 58, target: 54, distance: 800 }, { source: 62, target: 26, distance: 301.0 }, { source: 62, target: 42, distance: 437.0 }, { source: 62, target: 54, distance: 800 }, { source: 63, target: 1, distance: 800 }, { source: 63, target: 2, distance: 426.0 }, { source: 63, target: 7, distance: 800 }, { source: 63, target: 11, distance: 776.0 }, { source: 63, target: 14, distance: 800 }, { source: 63, target: 18, distance: 455.0 }, { source: 63, target: 22, distance: 416.0 }, { source: 63, target: 26, distance: 800 }, { source: 63, target: 28, distance: 800 }, { source: 63, target: 36, distance: 800 },
{ source: 63, target: 40, distance: 593.0 }, { source: 63, target: 42, distance: 800 }, { source: 63, target: 45, distance: 800 }, { source: 63, target: 46, distance: 165.0 }, { source: 63, target: 47, distance: 800 }, { source: 63, target: 50, distance: 503.0 }, { source: 63, target: 53, distance: 800 }, { source: 63, target: 54, distance: 800 }, { source: 63, target: 58, distance: 800 },
 { source: 64, target: 10, distance: 800 }, { source: 64, target: 14, distance: 800 }, { source: 64, target: 18, distance: 800 }, { source: 64, target: 20, distance: 800 }, { source: 64, target: 22, distance: 800 }, { source: 64, target: 28, distance: 800 }, { source: 64, target: 36, distance: 800 }, { source: 64, target: 46, distance: 800 }, { source: 64, target: 50, distance: 257.0 }, { source: 64, target: 54, distance: 800 }, { source: 64, target: 63, distance: 800 }, { source: 65, target: 1, distance: 800 }, { source: 65, target: 2, distance: 800 }, { source: 65, target: 4, distance: 800 }, { source: 65, target: 10, distance: 800 }, { source: 65, target: 11, distance: 800 }, { source: 65, target: 18, distance: 548.0 }, { source: 65, target: 22, distance: 43.0 }, { source: 65, target: 26, distance: 368.0 }, { source: 65, target: 27, distance: 800 }, { source: 65, target: 29, distance: 344.0 },
 { source: 65, target: 31, distance: 800 }, { source: 65, target: 36, distance: 800 }, { source: 65, target: 42, distance: 545.0 }, { source: 65, target: 44, distance: 745.0 }, { source: 65, target: 45, distance: 800 }, { source: 65, target: 46, distance: 721.0 }, { source: 65, target: 47, distance: 800 }, { source: 65, target: 50, distance: 403.0 }, { source: 65, target: 53, distance: 800 }, { source: 65, target: 54, distance: 139.0 },

 { source: 65, target: 58, distance: 800 }, { source: 65, target: 62, distance: 800 }, { source: 65, target: 63, distance: 800 }, { source: 65, target: 64, distance: 800 }, { source: 66, target: 54, distance: 800 }, { source: 67, target: 22, distance: 800 }, { source: 67, target: 36, distance: 800 }, { source: 67, target: 46, distance: 800 }, { source: 67, target: 50, distance: 800 }, { source: 67, target: 53, distance: 800 }, { source: 67, target: 54, distance: 800 }, { source: 67, target: 64, distance: 800 }, { source: 67, target: 65, distance: 480.0 }, { source: 68, target: 7, distance: 800 }, { source: 68, target: 14, distance: 800 }, { source: 68, target: 22, distance: 800 }, { source: 68, target: 28, distance: 800 }, { source: 68, target: 42, distance: 800 }, { source: 68, target: 46, distance: 800 }, { source: 68, target: 50, distance: 665.0 }, { source: 68, target: 54, distance: 800 },
  { source: 68, target: 64, distance: 800 }, { source: 68, target: 65, distance: 800 }, { source: 68, target: 67, distance: 800 }, { source: 69, target: 1, distance: 800 }, { source: 69, target: 18, distance: 800 }, { source: 69, target: 22, distance: 81.0 }, { source: 69, target: 26, distance: 800 }, { source: 69, target: 27, distance: 800 }, { source: 69, target: 31, distance: 560.0 },
 { source: 69, target: 42, distance: 578.0 }, { source: 69, target: 44, distance: 800 }, { source: 69, target: 46, distance: 800 }, { source: 69, target: 54, distance: 800 }, { source: 69, target: 65, distance: 800 }, { source: 69, target: 68, distance: 800 }, { source: 70, target: 2, distance: 800 }, { source: 70, target: 20, distance: 800 }, { source: 70, target: 22, distance: 800 }, { source: 70, target: 28, distance: 800 }, { source: 70, target: 46, distance: 800 }, { source: 70, target: 50, distance: 800 }, { source: 70, target: 54, distance: 800 }, { source: 71, target: 10, distance: 800 }, { source: 71, target: 11, distance: 800 }, { source: 71, target: 26, distance: 800 }, { source: 71, target: 28, distance: 800 }, { source: 71, target: 42, distance: 800 }, { source: 71, target: 44, distance: 503.0 }, { source: 71, target: 46, distance: 800 }, { source: 71, target: 50, distance: 800 },
 { source: 71, target: 54, distance: 673.0 }, { source: 71, target: 65, distance: 800 }, { source: 72, target: 0, distance: 800 },
{ source: 72, target: 1, distance: 800 }, { source: 72, target: 2, distance: 800 }, { source: 72, target: 4, distance: 662.0 }, { source: 72, target: 10, distance: 800 }, { source: 72, target: 11, distance: 800 }, { source: 72, target: 18, distance: 800 }, { source: 72, target: 22, distance: 150.0 }, { source: 72, target: 26, distance: 175.0 }, { source: 72, target: 27, distance: 48.0 }, { source: 72, target: 29, distance: 800 }, { source: 72, target: 41, distance: 800 }, { source: 72, target: 42, distance: 125.0 }, { source: 72, target: 46, distance: 800 }, { source: 72, target: 49, distance: 800 }, { source: 72, target: 54, distance: 281.0 }, { source: 72, target: 55, distance: 800 }, { source: 72, target: 65, distance: 800 }, { source: 72, target: 69, distance: 800 }, { source: 73, target: 0, distance: 800 }, { source: 73, target: 1, distance: 800 }, { source: 73, target: 2, distance: 800 },
{ source: 73, target: 4, distance: 351.0 }, { source: 73, target: 11, distance: 800 }, { source: 73, target: 18, distance: 800 }, { source: 73, target: 22, distance: 800 }, { source: 73, target: 26, distance: 636.0 }, { source: 73, target: 27, distance: 800 }, { source: 73, target: 28, distance: 773.0 }, { source: 73, target: 29, distance: 800 }, { source: 73, target: 40, distance: 800 },
  { source: 73,
    target: 41, distance: 800 }, { source: 73, target: 42, distance: 779.0 }, { source: 73, target: 46, distance: 412.0 }, { source: 73, target: 50, distance: 800 }, { source: 73, target: 54, distance: 307.0 }, { source: 73, target: 72, distance: 800 }, { source: 74, target: 0, distance: 244.0 }, { source: 74, target: 1, distance: 212.0 }, { source: 74, target: 2, distance: 570.0 }, { source: 74, target: 4, distance: 46.0 }, { source: 74, target: 7, distance: 800 }, { source: 74, target: 10, distance: 412.0 }, { source: 74, target: 11, distance: 152.0 }, { source: 74, target: 18, distance: 152.0 }, { source: 74, target: 19, distance: 800 }, { source: 74, target: 20, distance: 800 }, { source: 74, target: 22, distance: 30 }, { source: 74, target: 26, distance: 124.0 }, { source: 74, target: 27, distance: 147.0 }, { source: 74, target: 28, distance: 330.0 }, { source: 74, target: 29, distance: 327.0 },
 { source: 74, target: 31, distance: 530.0 }, { source: 74, target: 34, distance: 800 }, { source: 74, target: 36, distance: 800 }, { source: 74, target: 40, distance: 800 }, { source: 74, target: 41, distance: 419.0 }, { source: 74, target: 42, distance: 77.0 }, { source: 74, target: 43, distance: 800 }, { source: 74, target: 44, distance: 138.0 }, { source: 74, target: 45, distance: 726.0 }, { source: 74, target: 46, distance: 130.0 },

{ source: 74, target: 47, distance: 800 }, { source: 74, target: 49, distance: 313.0 }, { source: 74, target: 50, distance: 179.0 }, { source: 74, target: 53, distance: 485.0 }, { source: 74, target: 54, distance: 156.0 }, { source: 74, target: 63, distance: 800 }, { source: 74, target: 64, distance: 800 }, { source: 74, target: 65, distance: 370.0 }, { source: 74, target: 66, distance: 800 }, { source: 74, target: 68, distance: 800 }, { source: 74, target: 69, distance: 240.0 }, { source: 74, target: 71, distance: 800 }, { source: 74, target: 72, distance: 115.0 }, { source: 74, target: 73, distance: 144.0 }, { source: 75, target: 0, distance: 640.0 }, { source: 75, target: 1, distance: 562.0 }, { source: 75, target: 2, distance: 800 }, { source: 75, target: 4, distance: 163.0 }, { source: 75, target: 10, distance: 364.0 }, { source: 75, target: 11, distance: 272.0 }, { source: 75, target: 12, distance: 800 },
{ source: 75, target: 18, distance: 318.0 }, { source: 75, target: 19, distance: 800 }, { source: 75, target: 20, distance: 800 }, { source: 75, target: 22, distance: 211.0 }, { source: 75, target: 26, distance: 340.0 }, { source: 75, target: 27, distance: 243.0 }, { source: 75, target: 28, distance: 242.0 }, { source: 75, target: 29, distance: 500.0 }, { source: 75, target: 31, distance: 800 },
 { source: 75, target: 34, distance: 800 }, { source: 75, target: 40, distance: 800 }, { source: 75, target: 42, distance: 357.0 }, { source: 75, target: 44, distance: 70.0 }, { source: 75, target: 46, distance: 133.0 }, { source: 75, target: 47, distance: 800 }, { source: 75, target: 49, distance: 327.0 }, { source: 75, target: 50, distance: 568.0 }, { source: 75, target: 53, distance: 800 }, { source: 75, target: 54, distance: 195.0 }, { source: 75, target: 58, distance: 800 }, { source: 75, target: 64, distance: 800 }, { source: 75, target: 65, distance: 800 }, { source: 75, target: 66, distance: 800 }, { source: 75, target: 70, distance: 800 }, { source: 75, target: 71, distance: 800 }, { source: 75, target: 72, distance: 376.0 }, { source: 75, target: 73, distance: 701.0 }, { source: 75, target: 74, distance: 65.0 }, { source: 77, target: 22, distance: 800 }, { source: 77, target: 26, distance: 800 },
  { source: 77, target: 27, distance: 800 }, { source: 77, target: 42, distance: 800 }, { source: 77, target: 69, distance: 800 }, { source: 78, target: 0, distance: 800 }, { source: 78, target: 1, distance: 800 }, { source: 78, target: 2, distance: 800 }, { source: 78, target: 4, distance: 314.0 }, { source: 78, target: 7, distance: 800 },
{ source: 78, target: 10, distance: 800 }, { source: 78, target: 11, distance: 547.0 }, { source: 78, target: 12, distance: 800 }, { source: 78, target: 14, distance: 800 }, { source: 78, target: 16, distance: 800 }, { source: 78, target: 18, distance: 788.0 }, { source: 78, target: 19, distance: 800 }, { source: 78, target: 22, distance: 111.0 }, { source: 78, target: 26, distance: 111.0 }, { source: 78, target: 27, distance: 164.0 }, { source: 78, target: 28, distance: 800 }, { source: 78, target: 29, distance: 800 }, { source: 78, target: 31, distance: 726.0 }, { source: 78, target: 34, distance: 800 }, { source: 78, target: 36, distance: 800 }, { source: 78, target: 42, distance: 135.0 }, { source: 78, target: 44, distance: 449.0 }, { source: 78, target: 45, distance: 800 }, { source: 78, target: 46, distance: 415.0 }, { source: 78, target: 49, distance: 352.0 }, { source: 78, target: 50, distance: 254.0 },
 { source: 78, target: 53, distance: 800 }, { source: 78, target: 54, distance: 51.0 }, { source: 78, target: 58, distance: 800 }, { source: 78, target: 62, distance: 800 }, { source: 78, target: 64, distance: 800 }, { source: 78, target: 65, distance: 192.0 }, { source: 78, target: 67, distance: 800 }, { source: 78, target: 68, distance: 800 }, { source: 78, target: 69, distance: 574.0 },
 { source: 78, target: 71, distance: 800 }, { source: 78, target: 72, distance: 166.0 }, { source: 78, target: 73, distance: 800 }, { source: 78, target: 74, distance: 231.0 }, { source: 78, target: 75, distance: 461.0 }, { source: 78, target: 77, distance: 800 }, { source: 79, target: 13, distance: 800 }, { source: 79, target: 18, distance: 800 }, { source: 79, target: 22, distance: 800 }, { source: 79, target: 35, distance: 800 }, { source: 79, target: 42, distance: 800 }, { source: 79, target: 45, distance: 800 }, { source: 79, target: 65, distance: 800 }, { source: 79, target: 78, distance: 800 }, { source: 80, target: 45, distance: 800 }, { source: 80, target: 79, distance: 800 }, { source: 81, target: 0, distance: 177.0 }, { source: 81, target: 1, distance: 800 }, { source: 81, target: 2, distance: 800 }, { source: 81, target: 4, distance: 800 }, { source: 81, target: 10, distance: 800 },
  { source: 81, target: 18, distance: 800 }, { source: 81, target: 22, distance: 226.0 }, { source: 81, target: 26, distance: 173.0 }, { source: 81, target: 27, distance: 129.0 }, { source: 81, target: 28, distance: 762.0 }, { source: 81, target: 29, distance: 762.0 }, { source: 81, target: 41, distance: 800 }, { source: 81, target: 42, distance: 152.0 }, { source: 81, target: 44, distance: 800 }, { source: 81, target: 46, distance: 800 },

 { source: 81, target: 49, distance: 800 }, { source: 81, target: 54, distance: 165.0 }, { source: 81, target: 73, distance: 273.0 }, { source: 81, target: 74, distance: 69.0 }, { source: 81, target: 75, distance: 209.0 }, { source: 81, target: 78, distance: 460.0 }];

const width = 2000;
const height = 2000;


const SS = React.createClass({

  componentDidMount() {
    const his = (ReactDOM.findDOMNode(this));
    // set el height and width etc.
    const c1 = d3.rgb(0, 0x6C, 0x9A);
    const c2 = d3.rgb(0, 0xBE, 0xBE);
    const c3 = d3.rgb(0, 0xF3, 0xE4);
    const c4 = d3.rgb(0x9F, 0xF9, 0xD1);
    const width = 1500;
    const height = 2000;
    const svg = d3.select(his)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const force = d3.layout.force()
      .nodes(nodes)		// 指定节点数组
      .links(edges)		// 指定连线数组
      .size([width, height])	// 指定范围
      .linkDistance((d) => d.distance)	// 指定连线长度
      .charge(-500);	// 相互之间的作用力

    force.start();	// 开始作用

    // console.log(nodes);
    // console.log(edges);

    // 添加连线
    const svg_edges = svg.selectAll('line')
      .data(edges)
      .enter()
      .append('line')
      .style('stroke', '#aaa')
      .style('stroke-width', 1);

    const color = d3.scale.category20();

    // 添加节点
    const svg_nodes = svg.selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', (d) => {
        if (d.type == 1) return 25;
        return 12;
      })
      .style('fill', (d) => {
        if (d.class == 1) return c1;
        if (d.class == 2) return c2;
        if (d.class == 3) return c3;
        if (d.class == 4) return c4;
      })
      .call(force.drag);	// 使得节点能够拖动

    // 添加描述节点的文字
    const svg_texts = svg.selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .style('fill', 'black')
      .attr('dx', 20)
      .attr('dy', 8)
      .text((d) => d.name);


    force.on('tick', () => {
	// 对于每一个时间间隔


     // 更新连线坐标
      svg_edges.attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      // 更新节点坐标
      svg_nodes.attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y);

      // 更新文字坐标
      svg_texts.attr('x', (d) => d.x)
        .attr('y', (d) => d.y);
    });
  },


  render() {
    return (
      <div>
        <p>
          力导图
        </p>
      </div>
    );
  },
});


export default (SS);
