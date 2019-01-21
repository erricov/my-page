import { Information } from './information';

export const INFORMACIONES: Information[] = [
    // HABILIDADES
    {id: 0, titulo: 'Habilidades',
    array2t : null, array2: null, 
    sub1: 'Languages', sub1d: 'Spanish, Italian, English',
    sub2: 'Programming languages', sub2d: 'HTML5, CSS3, Javascript, Typescript, SQL, PHP',
    sub3: 'Frameworks', sub3d: 'Bootstrap 4, Angular 6, CodeIgniter',
    array1t: 'Networking / Technical support',
    // tslint:disable-next-line:max-line-length
    array1: [
        'Microsoft Operative Systems',
        'Windows Server Active Directory',
        'Switches-Routers',
        'Tools for remote support',
        'backup system', 
        'Apps instalation and support',
        'Email clients and protocols (POP, IMAP, Exchange, Office 365)'
    ]},
    // EXPERENCIA
    {id: 1, titulo: 'Experencia',
    array1t: 'Working experience',
    array1: [
        'Help Desk, supporto livello I y livello II (Azienda: Linkit Consultores C.A.)',
        'Responsabile del servizio clienti (Person to person). '
    ], 
    sub1: null, sub1d: null, sub2: null, sub2d: null, sub3: null, sub3d: null, array2t : null, array2:null,},
    // FORMAZION
    {id: 2, titulo: 'Formacion',
    array1t: 'Educational formation',
    array1: [
        'Tecnico universitario senior in informática I.U. “Jesús Obrero” (Venezuela)',
        'Diploma in scienza “Nicanor Bolet Peraza” (Venezuela)'
    ],
    array2t: 'Courses taken',
    array2: [
        'PHP (20 hours) - I.U."Jesus Obrero"',
        'English (2 years) - Univercidad Central de Venezuela',
        'Databases basics(20 hours) - I.U."Jesus Obrero"' 
    ], 
    sub2: null, sub2d: null, sub3: null, sub3d: null, sub1: null, sub1d: null}
];
