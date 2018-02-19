var bigInt = require('./bigint');

var DiffieHellman = {
    KeyExchange: function () {
        this.KeyPair = function (Private, Public) {
            this.Private = Private;
            this.Public = Public;
        };

        this.Commonality = function () {
            this.G = bigInt.str2bigInt("3", 10);
            // https://en.wikipedia.org/wiki/RSA_numbers#RSA-617
            // https://en.wikipedia.org/wiki/RSA_numbers#RSA-2048
            this.P = bigInt.str2bigInt("25195908475657893494027183240048398571429282126204032027777137836043662020707595556264018525880784406918290641249515082189298559149176184502808489120072844992687392807287776735971418347270261896375014971824691165077613379859095700097330459748808428401797429100642458691817195118746121515172654632282216869987549182422433637259085141865462043576798423387184774447920739934236584823824281198163815010674810451660377306056201619676256133844143603833904414952634432190114657544454178424020924616515723350778707749817125772467962926386356373289912154831438167899885040445364023527381951378636564391212010397122822120720357", 10);
        };

        this.Mix = function () {
            var keyPair = new this.KeyPair();
            var commonality = new this.Commonality();

            keyPair.Private = bigInt.bigInt2str(bigInt.randBigInt(2048, 0), 10);
            keyPair.Public = bigInt.bigInt2str(bigInt.powMod(commonality.G, bigInt.str2bigInt(keyPair.Private, 10), commonality.P), 10);

            return keyPair;
        };

        this.Remix = function (keyPair) {
            return bigInt.bigInt2str(bigInt.powMod(bigInt.str2bigInt(keyPair.Public, 10), bigInt.str2bigInt(keyPair.Private, 10), new this.Commonality().P), 10);
        };
    }
};

var client = new DiffieHellman.KeyExchange().Mix();
var serverPublic = "10072451067358128667370122172133565286426273520457081541202696009092543305211841094697906349575345674115923241301922156530480175764026481816770507437923200637573363088905607034558695241173246307009995878117784478243313131685968854799300800700691656662848606744118040971840314947233291339212661690749394423715891911134762717021019928988569780826551116299625361903924016859140944701252642684457210980390047869449067290007099386872773076553494951935303123004213090275240758545751867197472450416424811618764768165224643793362948959692975844359439266365789906954808980720889327586602558296556297716800168958101769299242493";

var KeyPair = new DiffieHellman.KeyExchange().KeyPair;
var clientHandshake = new KeyPair(client.Private, serverPublic);
var secret = new DiffieHellman.KeyExchange().Remix(clientHandshake);

console.log(`*** Client Private Key ***\n${client.Private}`);
console.log(`*** Client Public Key ***\n${client.Public}`);
console.log(`*** Secret Key ***\n${secret}`);