module.exports = {

    index: function(req, res) {
        var data = {
            name: 'test',
            address: 'une autre donnée',
            un_obj: {
                un_truc: 'valeur',
                un_autre_truc: 'autre valeur'
            },
            mon_tableau: [
                'un',
                'deux'
            ],
            mon_tableau_js: [
                {
                    champ_1: 'champ_1_1',
                    champ_2: 'champ_1_2'
                },
                {
                    champ_1: 'champ_2_1',
                    champ_2: 'champ_2_2'
                }
            ]
        };
        return res.view('account', data);
    }
};