
//Mis datos de productos
var pluData = [
(pep_gra = ["Pepino Granel", 43]),
(tom_che_vas = ["Tomate Cherry Vaso", 89]),
(pim_ver = ["Pimiento Verde", 64]),
(pat_gra = ["Papa Granel", 540]),
(ber_gra = ["Berenjena Granel", 40]),
(bon_gra = ["Batata Amarilla Granel", 511]),
(bat_roj = ["Batata Roja", 609]),
(man_pie = ["Mango Pieza", 61]),
(pap_pie = ["Papaya Pieza", 523]),
(piñ_gra = ["Piña Granel", 47]),
(cal_osc = ["Calabacin Oscuro", 38]),
(cal_gra = ["Calabaza Granel", 90]),
(kiw_gra = ["Kiwi Granel", 56]),
(alc_gra= ["Alcachofas Granel", 94]),
(bro_fil= ["Brocoli Filmado",110]),
(cal_cla= ["Calabacín Clarita", 70]),
(cal_eco= ["Calabacín ECO",192]),
(ceb_fre= ["Cebolleta Fresca", 86]),
(col_gra= ["Coliflor Granel", 189]),
(col_mix= ["Col Mix Granel", 513]),
(ice_pie= ["Iceberg Pieza", 28]),
(jud_500= ["Judías 500gr Envase", 36]),
(jud_bob= ["Judías Boby Envase",79]),
(pep_hol= ["Pepino Holandes Pieza", 23]),
(pim_ita= ["Pimiento Italiano", 26]),
(pim_roj= ["Pimiento Rojo Granel", 24]),
(pim_tri= ["Pimiento Tricolor", 15]),
(agu_pie= ["Aguacate Pieza", 977]),
(alb_gra= ["Albaricoques Granel",119]),
(caq_gra= ["Caqui Granel", 131]),
(cir_roj= ["Ciruela Roja", 149]),
(cir_ama= ["Ciruela Amarilla", 163]),
(coc_pie= ["Coco Pieza", 39]),
(kiw_gol= ["Kiwi Gold Pieza", 82]),
(kiw_zes= ["Kiwi Zespri granel", 949]),
(pue_rro= ["Puerros", 950]),
(tom_ens= ["Tomate Ensalada", 20]),
(tom_ram= ["Tomate Rama Granel", 19]),
(tom_per= ["Tomate Pera", 107]),
(tom_neg= ["Tomate Negro", 180]),
(tom_raf= ["Tomate Raf Granel", 33]),
(tom_can= ["Tomate Maduro", 514]),
(nue_gra= ["Nueces Granel", 875]),
(pis_gra= ["Pistacho Granel", 874]),
(zum_1li= ["Zumo 1L", 166]),
(zum_05l= ["Zumo 0,5L", 167]),
(zan_1kg= ["Zanahorias 1Kg", 32]),
(zan_man= ["Zanahoria Manojo", 137]),
(zan_eco= ["Zanahoria ECO", 918]),
(lim_ban= ["Lima Bandeja", 540]),
(lim_gra= ["Limón Granel", 176]),
(lim_mal= ["Limón Malla", 954]),
(man_gra= ["Mandarina Granel", 123]),
(man_gol= ["Manzana Golden", 48]),
(man_fuj= ["Manzana Fuji", 37]),
(man_gra= ["Manzana Granny Smith", 98]),
(man_roy= ["Manzana Royal Gala", 848]),
(mel_ama= ["Melocoton Amarillo", 78]),
(mel_roj= ["Melocoton Rojo", 128]),
(mel_bol= ["Melón Bollo", 49]),
(mel_pie= ["Melon Piel de Sapo", 139]),
(mel_gal= ["Melón Galia", 51]),
(mel_ama= ["Melon Amarillo", 918]),
(mel_can= ["Melón Cantaloupe", 956]),
(nar_mes= ["Naranjas Granel", 158]),
(nec_gra= ["Nectarina granel", 52]),
(par_agu= ["Paraguayo", 169]),
(per_con= ["Pera conferencia", 58]),
(per_roc= ["Pera rocha", 856]),
(per_erc= ["Pera Ercolina", 150]),
(per_san= ["Pera San Juan", 589]),
(per_env= ["Pera Envase 1kg", 60]),
(per_bla= ["Pera Blanquilla", 87]),
(piñ_pre= ["Piña Premium", 973]),
(pla_gra= ["Plátano Flowpack", 111]),
(pla_eco= ["Plátano ECO", 507]),
(pla_ext= ["Plátano Extra", 196]),
(pom_elo= ["Pomelo", 62]),
(san_neg= ["Sandia negra", 55]),
(san_ray= ["Sandia Rayada", 896]),
(san_eco= ["Sandia mini ECO", 103]),
(uva_bla= ["Uva Blanca", 146]),
(uva_roj= ["Uva Roja", 160]),
(bub_gra= ["Bubango", 500]),
(bub_red= ["Bubango redondo", 508]),
(ceb_lan= ["Cebolla Lanzarote", 502]),
(nar_can= ["Naranja Canaria", 563]),
(per_dev= ["Pera Devoer", 517]),
(pin_can= ["Piña Canaria", 589]),
(pin_md2= ["Piña MD2", 973]),
(nar_can= ["Naranja Canaria", 563]),



];

// Genero un número aleatorio que seleccione un producto
var ask = Math.floor(Math.random() * pluData.length);

//El número aleatorio será el índice del array que va a pedir
var product = pluData[ask];
var nombre_producto = product[0];

//var adivina = document.write(nombre_producto);
document.getElementById("produ").innerHTML = nombre_producto;
var plu_producto = product[1];

//En el input se pide el valor en el indice 1 del array
var input = document.getElementById("plu_input");

//el botón que llama la funcion adivinaPlu
document.addEventListener("send_plu", "adivinaPlu").onclick;



function adivinaPlu() {
  var answer = parseInt(input.value);

  if (answer == plu_producto) {
    text = "¡Correcto!";
  } else {
    text = "Es incorrecto. El PLU es " + plu_producto;
  }
  document.getElementById("answer_box").innerHTML = text;
}

function refreshPage()
 {
   window.location.reload();
}


console.log("Adivina el PLU de " + nombre_producto);
console.log("El código es " + plu_producto);
console.log(ask);



