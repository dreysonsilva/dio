let nomeJogador = 'Dreyson';
            let xpUsuario = 1000;

            if (xpUsuario === 1000) {
            console.log('Ferro');
            } else if (xpUsuario > 1001 && xpUsuario <= 2000) {
            console.log('Bronze');
            } else if (xpUsuario > 2001 && xpUsuario <= 5000) {
            console.log('Prata');
            } else if (xpUsuario > 7001 && xpUsuario <= 8000) {
            console.log('Platina');
            } else if (xpUsuario > 8001 && xpUsuario <= 9000) {
            console.log('Ascendente');
            } else if (xpUsuario > 9001 && xpUsuario <= 10000) {
            console.log('Imortal');
            } else if (xpUsuario > 10000) {
            console.log('Radiante');
            } else {
            console.log("você ainda tem xp de "+xpUsuario);
            }

            console.log('O Herói de nome ' + nomeJogador + ' está no nível de ' + xpUsuario);
        