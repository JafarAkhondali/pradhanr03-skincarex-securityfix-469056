INSERT INTO customers (name, email, password) VALUES ('ruby prada', 'ruby@gmail.com', 'test1');


INSERT INTO categories (category) VALUES ('Antioxidants');
INSERT INTO categories (category) VALUES ('Sunscreens');
INSERT INTO categories (category) VALUES ('Moisturizers');
INSERT INTO categories (category) VALUES ('Cleansers');

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('AOX+ EYE GEL', 92, 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTTifci4DZbq8B43TH7S1sdxY73AF0j4-lTME_w3mOup6IqsUoC&usqp=CAE', 10, 'This breakthrough serum-in-a-gel contains a synergistic antioxidant combination to help protect the delicate eye area from oxidative stress, while targeted actives revive under-eye skin and helps reduce the appearance of puffiness.', 'Dry', 'Dehydrated', 3, 1);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, category_id) VALUES ('C E FERULIC', 162, 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQfOMJo0TXbfypyAxO1_ML9Mxhgm2XalHipeCeCyMsKldOk3Os5M1wyNYx-9o1F1eXhJyiW05oh&usqp=CAE', 10, 'C E Ferulic is a revolutionary antioxidant combination that delivers advanced environmental protection against photoaging by neutralizing free radicals that can accelerate the appearance of aging.', 'Dry', 'Dehydrated', 1);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('PHYSICAL FUSION UV DEFENSE SPF 50', 34, 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTj8kvSdq6URmiPPVRD_ZaAYkGbUWCgSZNW8GrR6hmZ8m2ZnsmKf_HGu3UHa02W41MTAEaZW1YK&usqp=CAE', 10, 'This groundbreaking, weightless, 100% physical sunscreen provides water-resistant broad spectrum protection with transparent titanium dioxide and zinc oxide (Z-Cote®*). Enhanced with artemia salina, a plankton extract, this lightweight sunscreen increases skin defenses and resistance to UV and heat stress. Color-infused technology enhances natural skin tone and boosts daily radiance.', 'Normal', 'Sensitized', 2, 2);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, category_id) VALUES ('PHYSICAL MATTE UV DEFENSE SPF 50', 34, 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJFVqIvv1GwWt-ihWnEBpM7eW8F1E5MSCN8-cronHirtGubkm3xPMtmDwnde5jdfRNpZvhkciK&usqp=CAE', 10, 'Daily UVA/UVB oil-absorbing protective base with a matte finish.
This mattifying 100% physical sunscreen is formulated with titanium dioxide and zinc oxide (Z-Cote®*) to provide high broad spectrum UV protection. Enhanced with aerated silica technology, it is proven to maintain a matte finish even in hot, humid conditions. Its weightless mousse texture dries to a powder finish, optimizing makeup application. *Z-COTE HP-1 is a Registered Trademark of BASF', 'Oily', 'Acne', 2);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('DAILY MOISTURE', 60, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw7ea013b6/Products/635494134001-daily-moisture.png?sw=340&sh=550&sm=fit', 10, 'This lightweight pore-minimizing moisturizer for normal or oily skin hydrates, nourishes, and helps reduce the appearance of pore size with an exclusive combination of natural extracts.', 'Normal', 'Sensitized', 4, 3);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('HYDRA BALM', 22, 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbzyDkRL52yTdH25rCjEE_TmIoMAJqBZAWovv_q6VRHXoxtJwzwE5riIoLE0Z1rDZvoj2hBw8&usqp=CAE', 10, 'Originally designed to aid post-operative recovery, Hydra Balm is a multi-functional ointment ideal for treating the symptoms associated with severely dry and sensitive skin while improving overall hydration. This soothing balm forms a protective barrier on the skin allowing it to heal and regenerate, while also providing relief from itching and other skin irritations. Uniquely formulated to help lock in moisture, Hydra Balm maintains skins hydration levels longer than normal moisturizers.', 'Dry', 'Dehydrated', 3, 3);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, category_id) VALUES ('CLARIFYING CLEANSER', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dwa8eef044/Products/635494138009-clarifying-cleanser.png?sw=340&sh=550&sm=fit', 5, 'Formulated for acne-prone skin, Clarifying Cleanser combines salicylic acid, an FDA-approved acne treatment, with the exfoliating powers of microbeads plus glycolic and mandelic acids to unclog pores and help improve the appearance of problematic skin.', 'Dry', 'Dehydrated', 4);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('LHA SOLUTION', 92, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw5e8e1e11/Products/635494373004-lha-solution.png?sw=340&sh=550&sm=fit', 10, 'This breakthrough serum-in-a-gel contains a synergistic antioxidant combination to help protect the delicate eye area from oxidative stress, while targeted actives revive under-eye skin and helps reduce the appearance of puffiness.', 'Oily', 'Acne', 3, 4);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('GENTLE CLEANSER', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw36298fa4/Products/635494164008-gentle-cleanser.png?sw=340&sh=550&sm=fit', 10, 'Formulated for dry, sensitive or traumatized skin, Gentle Cleanser removes excess impurities and oil without drying the skin. Gentle enough to be used several times a day, this non-irritating cleanser conditions, soothes, and calms.', 'Oily', 'Acne', 3, 4);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('SERUM 20', 42, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dwc7c2246a/Products/635494260007-serum-20.png?sw=340&sh=550&sm=fit', 10, 'This breakthrough serum-in-a-gel contains a synergistic antioxidant combination to help protect the delicate eye area from oxidative stress, while targeted actives revive under-eye skin and helps reduce the appearance of puffiness.', 'Dry', 'Dehydrated', 3, 1);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, category_id) VALUES ('PHORETIN CF GEL', 162, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dwcbc87abf/Products/883140003953-phloretin-cf-gel.png?sw=340&sh=550&sm=fit', 10, 'C E Ferulic is a revolutionary antioxidant combination that delivers advanced environmental protection against photoaging by neutralizing free radicals that can accelerate the appearance of aging.', 'Dry', 'Dehydrated', 1);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('RESERVATROL', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw13ff47fd/Products/3606000498747-resveratrol-be.png?sw=340&sh=550&sm=fit', 10, 'This groundbreaking, weightless, 100% physical sunscreen provides water-resistant broad spectrum protection with transparent titanium dioxide and zinc oxide (Z-Cote®*). Enhanced with artemia salina, a plankton extract, this lightweight sunscreen increases skin defenses and resistance to UV and heat stress. Color-infused technology enhances natural skin tone and boosts daily radiance.', 'Normal', 'Sensitized', 2, 2);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, category_id) VALUES ('PHYSICAL UV DEFENSE SPF 50', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw6dff6a62/Products/physical-matte-uv-defense-spf50.png?sw=340&sh=550&sm=fit', 10, 'Daily UVA/UVB oil-absorbing protective base with a matte finish.
This mattifying 100% physical sunscreen is formulated with titanium dioxide and zinc oxide (Z-Cote®*) to provide high broad spectrum UV protection. Enhanced with aerated silica technology, it is proven to maintain a matte finish even in hot, humid conditions. Its weightless mousse texture dries to a powder finish, optimizing makeup application. *Z-COTE HP-1 is a Registered Trademark of BASF', 'Oily', 'Acne', 2);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('DAILY MOISTURING EHF', 40, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw5bf72d26/Products/883140023210-body-retexturing.png?sw=340&sh=550&sm=fit', 10, 'This lightweight pore-minimizing moisturizer for normal or oily skin hydrates, nourishes, and helps reduce the appearance of pore size with an exclusive combination of natural extracts.', 'Normal', 'Sensitized', 4, 3);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('HYDRA OIL VANILLA', 52, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw23a7269d/Products/635494130003-clarifying-clay-masque-tr.png?sw=340&sh=550&sm=fit', 10, 'Originally designed to aid post-operative recovery, Hydra Balm is a multi-functional ointment ideal for treating the symptoms associated with severely dry and sensitive skin while improving overall hydration. This soothing balm forms a protective barrier on the skin allowing it to heal and regenerate, while also providing relief from itching and other skin irritations. Uniquely formulated to help lock in moisture, Hydra Balm maintains skins hydration levels longer than normal moisturizers.', 'Dry', 'Dehydrated', 3, 3);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, category_id) VALUES ('CLARIFYING OIL CLEANSER', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dwa8eef044/Products/635494138009-clarifying-cleanser.png?sw=340&sh=550&sm=fit', 5, 'Formulated for acne-prone skin, Clarifying Cleanser combines salicylic acid, an FDA-approved acne treatment, with the exfoliating powers of microbeads plus glycolic and mandelic acids to unclog pores and help improve the appearance of problematic skin.', 'Dry', 'Dehydrated', 4);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('LHA THC SOLUTION', 92, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw5e8e1e11/Products/635494373004-lha-solution.png?sw=340&sh=550&sm=fit', 10, 'This breakthrough serum-in-a-gel contains a synergistic antioxidant combination to help protect the delicate eye area from oxidative stress, while targeted actives revive under-eye skin and helps reduce the appearance of puffiness.', 'Oily', 'Acne', 3, 4);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('GENTLE FIT CLEANSER', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw36298fa4/Products/635494164008-gentle-cleanser.png?sw=340&sh=550&sm=fit', 10, 'Formulated for dry, sensitive or traumatized skin, Gentle Cleanser removes excess impurities and oil without drying the skin. Gentle enough to be used several times a day, this non-irritating cleanser conditions, soothes, and calms.', 'Oily', 'Acne', 3, 4);



INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('ROLL EYE GEL', 92, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dwdff47750/Products/883140004356-aox-eye-gel.png?sw=340&sh=550&sm=fit', 10, 'This breakthrough serum-in-a-gel contains a synergistic antioxidant combination to help protect the delicate eye area from oxidative stress, while targeted actives revive under-eye skin and helps reduce the appearance of puffiness.', 'Dry', 'Dehydrated', 3, 1);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, category_id) VALUES ('C E FERULIC IRON', 162, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw04b5afe8/CEF_web_images.png?sw=340&sh=550&sm=fit', 10, 'C E Ferulic is a revolutionary antioxidant combination that delivers advanced environmental protection against photoaging by neutralizing free radicals that can accelerate the appearance of aging.', 'Dry', 'Dehydrated', 1);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('PHYSICAL DEEP FUSION UV DEFENSE SPF 50', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw1555145c/Products/883140000778-physical-fusion.png?sw=340&sh=550&sm=fit', 10, 'This groundbreaking, weightless, 100% physical sunscreen provides water-resistant broad spectrum protection with transparent titanium dioxide and zinc oxide (Z-Cote®*). Enhanced with artemia salina, a plankton extract, this lightweight sunscreen increases skin defenses and resistance to UV and heat stress. Color-infused technology enhances natural skin tone and boosts daily radiance.', 'Normal', 'Sensitized', 2, 2);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, category_id) VALUES ('IF UV DEFENSE SPF 50', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw6dff6a62/Products/physical-matte-uv-defense-spf50.png?sw=340&sh=550&sm=fit', 10, 'Daily UVA/UVB oil-absorbing protective base with a matte finish.
This mattifying 100% physical sunscreen is formulated with titanium dioxide and zinc oxide (Z-Cote®*) to provide high broad spectrum UV protection. Enhanced with aerated silica technology, it is proven to maintain a matte finish even in hot, humid conditions. Its weightless mousse texture dries to a powder finish, optimizing makeup application. *Z-COTE HP-1 is a Registered Trademark of BASF', 'Oily', 'Acne', 2);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('NIGHTLY MOISTURE', 60, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw7ea013b6/Products/635494134001-daily-moisture.png?sw=340&sh=550&sm=fit', 10, 'This lightweight pore-minimizing moisturizer for normal or oily skin hydrates, nourishes, and helps reduce the appearance of pore size with an exclusive combination of natural extracts.', 'Normal', 'Sensitized', 4, 3);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('SEA EYE BALM', 22, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw83a17883/Products/883140501015-hydra-balm.png?sw=340&sh=550&sm=fit', 10, 'Originally designed to aid post-operative recovery, Hydra Balm is a multi-functional ointment ideal for treating the symptoms associated with severely dry and sensitive skin while improving overall hydration. This soothing balm forms a protective barrier on the skin allowing it to heal and regenerate, while also providing relief from itching and other skin irritations. Uniquely formulated to help lock in moisture, Hydra Balm maintains skins hydration levels longer than normal moisturizers.', 'Dry', 'Dehydrated', 3, 3);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, category_id) VALUES ('MESMER CLEANSER', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dwa8eef044/Products/635494138009-clarifying-cleanser.png?sw=340&sh=550&sm=fit', 5, 'Formulated for acne-prone skin, Clarifying Cleanser combines salicylic acid, an FDA-approved acne treatment, with the exfoliating powers of microbeads plus glycolic and mandelic acids to unclog pores and help improve the appearance of problematic skin.', 'Dry', 'Dehydrated', 4);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('FDA SOLUTION', 92, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw5e8e1e11/Products/635494373004-lha-solution.png?sw=340&sh=550&sm=fit', 10, 'This breakthrough serum-in-a-gel contains a synergistic antioxidant combination to help protect the delicate eye area from oxidative stress, while targeted actives revive under-eye skin and helps reduce the appearance of puffiness.', 'Oily', 'Acne', 3, 4);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('HARSH CLEANSER', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw36298fa4/Products/635494164008-gentle-cleanser.png?sw=340&sh=550&sm=fit', 10, 'Formulated for dry, sensitive or traumatized skin, Gentle Cleanser removes excess impurities and oil without drying the skin. Gentle enough to be used several times a day, this non-irritating cleanser conditions, soothes, and calms.', 'Oily', 'Acne', 3, 4);



INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('NOSE GEL', 92, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dwdff47750/Products/883140004356-aox-eye-gel.png?sw=340&sh=550&sm=fit', 10, 'This breakthrough serum-in-a-gel contains a synergistic antioxidant combination to help protect the delicate eye area from oxidative stress, while targeted actives revive under-eye skin and helps reduce the appearance of puffiness.', 'Dry', 'Dehydrated', 3, 1);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, category_id) VALUES ('C E FERGIE', 162, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw04b5afe8/CEF_web_images.png?sw=340&sh=550&sm=fit', 10, 'C E Ferulic is a revolutionary antioxidant combination that delivers advanced environmental protection against photoaging by neutralizing free radicals that can accelerate the appearance of aging.', 'Dry', 'Dehydrated', 1);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('PHYSICAL FUSION UVB DEFENCE', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw1555145c/Products/883140000778-physical-fusion.png?sw=340&sh=550&sm=fit', 10, 'This groundbreaking, weightless, 100% physical sunscreen provides water-resistant broad spectrum protection with transparent titanium dioxide and zinc oxide (Z-Cote®*). Enhanced with artemia salina, a plankton extract, this lightweight sunscreen increases skin defenses and resistance to UV and heat stress. Color-infused technology enhances natural skin tone and boosts daily radiance.', 'Normal', 'Sensitized', 2, 2);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, category_id) VALUES ('MATTE UV DEFENSE SPF 40', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw6dff6a62/Products/physical-matte-uv-defense-spf50.png?sw=340&sh=550&sm=fit', 10, 'Daily UVA/UVB oil-absorbing protective base with a matte finish.
This mattifying 100% physical sunscreen is formulated with titanium dioxide and zinc oxide (Z-Cote®*) to provide high broad spectrum UV protection. Enhanced with aerated silica technology, it is proven to maintain a matte finish even in hot, humid conditions. Its weightless mousse texture dries to a powder finish, optimizing makeup application. *Z-COTE HP-1 is a Registered Trademark of BASF', 'Oily', 'Acne', 2);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('DAILY HYDRA MOISTURE', 60, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw7ea013b6/Products/635494134001-daily-moisture.png?sw=340&sh=550&sm=fit', 10, 'This lightweight pore-minimizing moisturizer for normal or oily skin hydrates, nourishes, and helps reduce the appearance of pore size with an exclusive combination of natural extracts.', 'Normal', 'Sensitized', 4, 3);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('DRY BALM', 22, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw83a17883/Products/883140501015-hydra-balm.png?sw=340&sh=550&sm=fit', 10, 'Originally designed to aid post-operative recovery, Hydra Balm is a multi-functional ointment ideal for treating the symptoms associated with severely dry and sensitive skin while improving overall hydration. This soothing balm forms a protective barrier on the skin allowing it to heal and regenerate, while also providing relief from itching and other skin irritations. Uniquely formulated to help lock in moisture, Hydra Balm maintains skins hydration levels longer than normal moisturizers.', 'Dry', 'Dehydrated', 3, 3);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, category_id) VALUES ('UNCLARIFYING CLEANSER', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dwa8eef044/Products/635494138009-clarifying-cleanser.png?sw=340&sh=550&sm=fit', 5, 'Formulated for acne-prone skin, Clarifying Cleanser combines salicylic acid, an FDA-approved acne treatment, with the exfoliating powers of microbeads plus glycolic and mandelic acids to unclog pores and help improve the appearance of problematic skin.', 'Dry', 'Dehydrated', 4);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('LHAFF SOLUTION', 92, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw5e8e1e11/Products/635494373004-lha-solution.png?sw=340&sh=550&sm=fit', 10, 'This breakthrough serum-in-a-gel contains a synergistic antioxidant combination to help protect the delicate eye area from oxidative stress, while targeted actives revive under-eye skin and helps reduce the appearance of puffiness.', 'Oily', 'Acne', 3, 4);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('GENTLEMIT CLEANSER', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw36298fa4/Products/635494164008-gentle-cleanser.png?sw=340&sh=550&sm=fit', 10, 'Formulated for dry, sensitive or traumatized skin, Gentle Cleanser removes excess impurities and oil without drying the skin. Gentle enough to be used several times a day, this non-irritating cleanser conditions, soothes, and calms.', 'Oily', 'Acne', 3, 4);



INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('TEST GEL', 92, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dwdff47750/Products/883140004356-aox-eye-gel.png?sw=340&sh=550&sm=fit', 10, 'This breakthrough serum-in-a-gel contains a synergistic antioxidant combination to help protect the delicate eye area from oxidative stress, while targeted actives revive under-eye skin and helps reduce the appearance of puffiness.', 'Dry', 'Dehydrated', 3, 1);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, category_id) VALUES ('COLOR FERULIC', 162, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw04b5afe8/CEF_web_images.png?sw=340&sh=550&sm=fit', 10, 'C E Ferulic is a revolutionary antioxidant combination that delivers advanced environmental protection against photoaging by neutralizing free radicals that can accelerate the appearance of aging.', 'Dry', 'Dehydrated', 1);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('PHYSICAL FUSION UV DEFENSE SPF 60', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw1555145c/Products/883140000778-physical-fusion.png?sw=340&sh=550&sm=fit', 10, 'This groundbreaking, weightless, 100% physical sunscreen provides water-resistant broad spectrum protection with transparent titanium dioxide and zinc oxide (Z-Cote®*). Enhanced with artemia salina, a plankton extract, this lightweight sunscreen increases skin defenses and resistance to UV and heat stress. Color-infused technology enhances natural skin tone and boosts daily radiance.', 'Normal', 'Sensitized', 2, 2);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, category_id) VALUES ('PHYSICAL MATTE UV DEFENSE SPF 10', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw6dff6a62/Products/physical-matte-uv-defense-spf50.png?sw=340&sh=550&sm=fit', 10, 'Daily UVA/UVB oil-absorbing protective base with a matte finish.
This mattifying 100% physical sunscreen is formulated with titanium dioxide and zinc oxide (Z-Cote®*) to provide high broad spectrum UV protection. Enhanced with aerated silica technology, it is proven to maintain a matte finish even in hot, humid conditions. Its weightless mousse texture dries to a powder finish, optimizing makeup application. *Z-COTE HP-1 is a Registered Trademark of BASF', 'Oily', 'Acne', 2);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('24 HR MOISTURE', 60, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw7ea013b6/Products/635494134001-daily-moisture.png?sw=340&sh=550&sm=fit', 10, 'This lightweight pore-minimizing moisturizer for normal or oily skin hydrates, nourishes, and helps reduce the appearance of pore size with an exclusive combination of natural extracts.', 'Normal', 'Sensitized', 4, 3);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('SUPRA BALM', 22, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw83a17883/Products/883140501015-hydra-balm.png?sw=340&sh=550&sm=fit', 10, 'Originally designed to aid post-operative recovery, Hydra Balm is a multi-functional ointment ideal for treating the symptoms associated with severely dry and sensitive skin while improving overall hydration. This soothing balm forms a protective barrier on the skin allowing it to heal and regenerate, while also providing relief from itching and other skin irritations. Uniquely formulated to help lock in moisture, Hydra Balm maintains skins hydration levels longer than normal moisturizers.', 'Dry', 'Dehydrated', 3, 3);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, category_id) VALUES ('CLARIFYING TONIC WATER', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dwa8eef044/Products/635494138009-clarifying-cleanser.png?sw=340&sh=550&sm=fit', 5, 'Formulated for acne-prone skin, Clarifying Cleanser combines salicylic acid, an FDA-approved acne treatment, with the exfoliating powers of microbeads plus glycolic and mandelic acids to unclog pores and help improve the appearance of problematic skin.', 'Dry', 'Dehydrated', 4);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('LHA SERMT', 92, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw5e8e1e11/Products/635494373004-lha-solution.png?sw=340&sh=550&sm=fit', 10, 'This breakthrough serum-in-a-gel contains a synergistic antioxidant combination to help protect the delicate eye area from oxidative stress, while targeted actives revive under-eye skin and helps reduce the appearance of puffiness.', 'Oily', 'Acne', 3, 4);

INSERT INTO products (title, price, image, quantity, description, skin_type, skin_condition, rating, category_id) VALUES ('FACE CLEANSER', 34, 'http://demandware.edgesuite.net/sits_pod22/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dw36298fa4/Products/635494164008-gentle-cleanser.png?sw=340&sh=550&sm=fit', 10, 'Formulated for dry, sensitive or traumatized skin, Gentle Cleanser removes excess impurities and oil without drying the skin. Gentle enough to be used several times a day, this non-irritating cleanser conditions, soothes, and calms.', 'Oily', 'Acne', 3,4);


INSERT INTO comments (customer_id, product_id, description) VALUES (1, 1, 'Nice I like it');





