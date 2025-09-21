// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import {messageAccueil} from '../index';

describe('Message d’accueil personnalisé ', () => {
    test('Doit retouner le message : Bonjour, Alice! Bienvenue.', () => {
        expect(messageAccueil("Alice")).toEqual('Bonjour, Alice! Bienvenue.');
    });
    test('Doit retouner le message : Bonjour, Bob! Bienvenue.', () => {
        expect(messageAccueil("Bob")).toEqual('Bonjour, Bob! Bienvenue.');
    });
});