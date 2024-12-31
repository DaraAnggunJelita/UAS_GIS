var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Wilayah_1 = new ol.format.GeoJSON();
var features_Wilayah_1 = format_Wilayah_1.readFeatures(json_Wilayah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wilayah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wilayah_1.addFeatures(features_Wilayah_1);
var lyr_Wilayah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wilayah_1, 
                style: style_Wilayah_1,
                popuplayertitle: 'Wilayah',
                interactive: true,
                title: '<img src="styles/legend/Wilayah_1.png" /> Wilayah'
            });
var format_PosSatpam_2 = new ol.format.GeoJSON();
var features_PosSatpam_2 = format_PosSatpam_2.readFeatures(json_PosSatpam_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PosSatpam_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PosSatpam_2.addFeatures(features_PosSatpam_2);
var lyr_PosSatpam_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PosSatpam_2, 
                style: style_PosSatpam_2,
                popuplayertitle: 'Pos Satpam',
                interactive: true,
                title: '<img src="styles/legend/PosSatpam_2.png" /> Pos Satpam'
            });
var format_jalan_3 = new ol.format.GeoJSON();
var features_jalan_3 = format_jalan_3.readFeatures(json_jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_3.addFeatures(features_jalan_3);
var lyr_jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_3, 
                style: style_jalan_3,
                popuplayertitle: 'jalan',
                interactive: true,
                title: '<img src="styles/legend/jalan_3.png" /> jalan'
            });
var format_Masjid_4 = new ol.format.GeoJSON();
var features_Masjid_4 = format_Masjid_4.readFeatures(json_Masjid_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masjid_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masjid_4.addFeatures(features_Masjid_4);
var lyr_Masjid_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masjid_4, 
                style: style_Masjid_4,
                popuplayertitle: 'Masjid',
                interactive: true,
                title: '<img src="styles/legend/Masjid_4.png" /> Masjid'
            });
var format_Perumahan_5 = new ol.format.GeoJSON();
var features_Perumahan_5 = format_Perumahan_5.readFeatures(json_Perumahan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perumahan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perumahan_5.addFeatures(features_Perumahan_5);
var lyr_Perumahan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perumahan_5, 
                style: style_Perumahan_5,
                popuplayertitle: 'Perumahan',
                interactive: true,
                title: '<img src="styles/legend/Perumahan_5.png" /> Perumahan'
            });
var format_KLINIK_6 = new ol.format.GeoJSON();
var features_KLINIK_6 = format_KLINIK_6.readFeatures(json_KLINIK_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KLINIK_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KLINIK_6.addFeatures(features_KLINIK_6);
var lyr_KLINIK_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KLINIK_6, 
                style: style_KLINIK_6,
                popuplayertitle: 'KLINIK',
                interactive: true,
                title: '<img src="styles/legend/KLINIK_6.png" /> KLINIK'
            });
var format_Paud_7 = new ol.format.GeoJSON();
var features_Paud_7 = format_Paud_7.readFeatures(json_Paud_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paud_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paud_7.addFeatures(features_Paud_7);
var lyr_Paud_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paud_7, 
                style: style_Paud_7,
                popuplayertitle: 'Paud',
                interactive: true,
                title: '<img src="styles/legend/Paud_7.png" /> Paud'
            });
var format_Taman_8 = new ol.format.GeoJSON();
var features_Taman_8 = format_Taman_8.readFeatures(json_Taman_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taman_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taman_8.addFeatures(features_Taman_8);
var lyr_Taman_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taman_8, 
                style: style_Taman_8,
                popuplayertitle: 'Taman',
                interactive: true,
                title: '<img src="styles/legend/Taman_8.png" /> Taman'
            });
var format_Warung_9 = new ol.format.GeoJSON();
var features_Warung_9 = format_Warung_9.readFeatures(json_Warung_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Warung_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Warung_9.addFeatures(features_Warung_9);
var lyr_Warung_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Warung_9, 
                style: style_Warung_9,
                popuplayertitle: 'Warung',
                interactive: true,
                title: '<img src="styles/legend/Warung_9.png" /> Warung'
            });
var format_Lapangan_10 = new ol.format.GeoJSON();
var features_Lapangan_10 = format_Lapangan_10.readFeatures(json_Lapangan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_10.addFeatures(features_Lapangan_10);
var lyr_Lapangan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_10, 
                style: style_Lapangan_10,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_10.png" /> Lapangan'
            });
var format_Rumah_11 = new ol.format.GeoJSON();
var features_Rumah_11 = format_Rumah_11.readFeatures(json_Rumah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_11.addFeatures(features_Rumah_11);
var lyr_Rumah_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_11, 
                style: style_Rumah_11,
                popuplayertitle: 'Rumah',
                interactive: true,
                title: '<img src="styles/legend/Rumah_11.png" /> Rumah'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Wilayah_1.setVisible(true);lyr_PosSatpam_2.setVisible(true);lyr_jalan_3.setVisible(true);lyr_Masjid_4.setVisible(true);lyr_Perumahan_5.setVisible(true);lyr_KLINIK_6.setVisible(true);lyr_Paud_7.setVisible(true);lyr_Taman_8.setVisible(true);lyr_Warung_9.setVisible(true);lyr_Lapangan_10.setVisible(true);lyr_Rumah_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Wilayah_1,lyr_PosSatpam_2,lyr_jalan_3,lyr_Masjid_4,lyr_Perumahan_5,lyr_KLINIK_6,lyr_Paud_7,lyr_Taman_8,lyr_Warung_9,lyr_Lapangan_10,lyr_Rumah_11];
lyr_Wilayah_1.set('fieldAliases', {'id': 'id', 'LUAS': 'LUAS', });
lyr_PosSatpam_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'LUAS': 'LUAS', });
lyr_jalan_3.set('fieldAliases', {'id': 'id', 'Panjang': 'Panjang', });
lyr_Masjid_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'LUAS': 'LUAS', });
lyr_Perumahan_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'LUAS': 'LUAS', });
lyr_KLINIK_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'LUAS': 'LUAS', });
lyr_Paud_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'LUAS': 'LUAS', });
lyr_Taman_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'LUAS': 'LUAS', });
lyr_Warung_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'LUAS': 'LUAS', });
lyr_Lapangan_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'LUAS': 'LUAS', });
lyr_Rumah_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'LUAS': 'LUAS', });
lyr_Wilayah_1.set('fieldImages', {'id': 'TextEdit', 'LUAS': '', });
lyr_PosSatpam_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'LUAS': '', });
lyr_jalan_3.set('fieldImages', {'id': '', 'Panjang': '', });
lyr_Masjid_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'LUAS': '', });
lyr_Perumahan_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'LUAS': '', });
lyr_KLINIK_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_Paud_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'LUAS': '', });
lyr_Taman_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'LUAS': '', });
lyr_Warung_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'LUAS': '', });
lyr_Lapangan_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'LUAS': '', });
lyr_Rumah_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'LUAS': '', });
lyr_Wilayah_1.set('fieldLabels', {'id': 'hidden field', 'LUAS': 'inline label - always visible', });
lyr_PosSatpam_2.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'LUAS': 'inline label - always visible', });
lyr_jalan_3.set('fieldLabels', {'id': 'hidden field', 'Panjang': 'inline label - always visible', });
lyr_Masjid_4.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'LUAS': 'inline label - always visible', });
lyr_Perumahan_5.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'LUAS': 'inline label - always visible', });
lyr_KLINIK_6.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'LUAS': 'inline label - always visible', });
lyr_Paud_7.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'LUAS': 'inline label - always visible', });
lyr_Taman_8.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'LUAS': 'inline label - always visible', });
lyr_Warung_9.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'LUAS': 'inline label - always visible', });
lyr_Lapangan_10.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'LUAS': 'inline label - always visible', });
lyr_Rumah_11.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'LUAS': 'inline label - always visible', });
lyr_Rumah_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});