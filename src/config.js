function config() {
    var ini = [
        {   // 1.
            name: 'default',
            img_width: 10927,
            img_height: 10657,
            img_depth: 40 * 3.8462 * 0.9,
            particle_size: 8000.0,
            // zThres: 1500.0,
            geneData: 'https://api.github.com/repos/MathieuBo/iss_viewer/contents/data/geneData?ref=master',
            cellData: 'https://api.github.com/repos/MathieuBo/iss_viewer/contents/data/cellData?ref=master',
        },
    ];
    return d3.map(ini, function (d) {return d.name;})
}

