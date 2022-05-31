

function glyphSettings()
{
    var out = [


                {gene:'Snca', color: '#0000FF',  glyphSymbol: '+', specificity: 'Neuron',  glyphName: 'plus'},
                {gene:'Cplx2', color: '#0000FF',  glyphSymbol: '.', specificity: 'Neuron',  glyphName: 'point'},
                {gene:'Lhx6', color: '#0000FF',  glyphSymbol: 's', specificity: 'Neuron',  glyphName: 'square'},
                {gene:'Col25a1', color: '#0000FF',  glyphSymbol: '^', specificity: 'Neuron',  glyphName: 'triangleUp'},
                {gene:'Pnoc', color: '#0000FF',  glyphSymbol: '>', specificity: 'Neuron',  glyphName: 'triangleRight'},
                {gene:'Rab3c', color: '#0000FF',  glyphSymbol: '<', specificity: 'Neuron',  glyphName: 'triangleLeft'},
                {gene:'Gad1', color: '#0000FF',  glyphSymbol: 'p', specificity: 'Neuron',  glyphName: 'star5'},
                {gene:'Slc6a1', color: '#0000FF',  glyphSymbol: 'h', specificity: 'Neuron',  glyphName: 'star6'},
                {gene:'Th', color: '#00B3FF',         glyphSymbol: '+', specificity: 'Neuron',  glyphName: 'plus'},
                {gene:'Crhbp', color: '#00B3FF',         glyphSymbol: 'o', specificity: 'Neuron',  glyphName: 'circle'},
                {gene:'Sst', color: '#00B3FF',         glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
                {gene:'Npy', color: '#00B3FF',         glyphSymbol: '.', specificity: 'Neuron',  glyphName: 'point'},
                {gene:'Synpr', color: '#00B3FF',         glyphSymbol: 'x', specificity: 'Neuron',  glyphName: 'cross'},
                {gene:'Chodl', color: '#00B3FF',         glyphSymbol: 's', specificity: 'Neuron',  glyphName: 'square'},
                {gene:'Cort', color: '#00B3FF',         glyphSymbol: 'd', specificity: 'Neuron',  glyphName: 'diamond'},
                {gene:'Reln', color: '#00B3FF',         glyphSymbol: '^', specificity: 'Neuron',  glyphName: 'triangleUp'},
                {gene:'Serpini1', color: '#00B3FF',         glyphSymbol: '<', specificity: 'Neuron',  glyphName: 'triangleLeft'},
                {gene:'Satb1', color: '#00B3FF',         glyphSymbol: '>', specificity: 'Neuron',  glyphName: 'triangleRight'},
                {gene:'Grin3a', color: '#00B3FF',         glyphSymbol: 'p', specificity: 'Neuron',  glyphName: 'star5'},
                {gene:'Tac1', color: '#5C33FF',       glyphSymbol: 'o', specificity: 'Neuron',  glyphName: 'circle'},
                {gene:'Pvalb', color: '#5C33FF',       glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
                {gene:'Thsd7a', color: '#5C33FF',       glyphSymbol: 'd', specificity: 'Neuron',  glyphName: 'diamond'},
                {gene:'Cox6a2', color: '#5C33FF',       glyphSymbol: 'v', specificity: 'Neuron',  glyphName: 'triangleDown'},
                {gene:'Chrm2', color: '#5C33FF',       glyphSymbol: 'p', specificity: 'Neuron',  glyphName: 'star5'},
                {gene:'Id2', color: '#FF00E6',         glyphSymbol: '+', specificity: 'Neuron',  glyphName: 'plus'},
                {gene:'Hapln1', color: '#FF00E6',         glyphSymbol: 'o', specificity: 'Neuron',  glyphName: 'circle'},
                {gene:'Gabrd', color: '#FF00E6',         glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
                {gene:'Cryab', color: '#FF00E6',         glyphSymbol: 'x', specificity: 'Neuron',  glyphName: 'cross'},
                {gene:'Kit', color: '#FF00E6',         glyphSymbol: 's', specificity: 'Neuron',  glyphName: 'square'},
                {gene:'Ndnf', color: '#FF00E6',         glyphSymbol: 'd', specificity: 'Neuron',  glyphName: 'diamond'},
                {gene:'Nos1', color: '#FF00E6',         glyphSymbol: '^', specificity: 'Neuron',  glyphName: 'triangleUp'},
                {gene:'Lamp5', color: '#FF00E6',         glyphSymbol: '>', specificity: 'Neuron',  glyphName: 'triangleRight'},
                {gene:'Cadps2', color: '#995C00',      glyphSymbol: 'o', specificity: 'Neuron',  glyphName: 'circle'},
                {gene:'Cxcl14', color: '#995C00',      glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
                {gene:'Ntng1', color: '#995C00',      glyphSymbol: 's', specificity: 'Neuron',  glyphName: 'square'},
                {gene:'Cpne5', color: '#995C00',      glyphSymbol: 'd', specificity: 'Neuron',  glyphName: 'diamond'},
                {gene:'Rgs12', color: '#995C00',      glyphSymbol: 'h', specificity: 'Neuron',  glyphName: 'star6'},
                {gene:'Sncg', color: '#FF0000',        glyphSymbol: 'o', specificity: 'Neuron',  glyphName: 'circle'},
                {gene:'Cnr1', color: '#FF0000',        glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
                {gene:'Cck', color: '#FF0000',        glyphSymbol: '.', specificity: 'Neuron',  glyphName: 'point'},
                {gene:'Trp53i11', color: '#FF0000',        glyphSymbol: 'x', specificity: 'Neuron',  glyphName: 'cross'},
                {gene:'Sema3c', color: '#FF0000',        glyphSymbol: 's', specificity: 'Neuron',  glyphName: 'square'},
                {gene:'Yjefn3', color: '#FF0000',        glyphSymbol: 'v', specificity: 'Neuron',  glyphName: 'triangleDown'},
                {gene:'Nov', color: '#FF0000',        glyphSymbol: '<', specificity: 'Neuron',  glyphName: 'triangleLeft'},
                {gene:'Kctd12', color: '#FF0000',        glyphSymbol: 'p', specificity: 'Neuron',  glyphName: 'star5'},
                {gene:'Tac2', color: '#FFC700',         glyphSymbol: '+', specificity: 'Neuron',  glyphName: 'plus'},
                {gene:'Npy2r', color: '#FFC700',         glyphSymbol: 'o', specificity: 'Neuron',  glyphName: 'circle'},
                {gene:'Calb2', color: '#FFC700',         glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
                {gene:'Htr3a', color: '#FFC700',         glyphSymbol: '.', specificity: 'Neuron',  glyphName: 'point'},
                {gene:'Penk', color: '#FFC700',         glyphSymbol: 's', specificity: 'Neuron',  glyphName: 'square'},
                {gene:'Pthlh', color: '#FFC700',         glyphSymbol: '^', specificity: 'Neuron',  glyphName: 'triangleUp'},
                {gene:'Vip', color: '#FFC700',         glyphSymbol: 'v', specificity: 'Neuron',  glyphName: 'triangleDown'},
                {gene:'Crh', color: '#FFC700',         glyphSymbol: '>', specificity: 'Neuron',  glyphName: 'triangleRight'},
                {gene:'Calb1', color: '#96B38F', glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
                {gene:'Gda', color: '#407F59',    glyphSymbol: '+', specificity: 'Neuron',  glyphName: 'plus'},
                {gene:'Bcl11b', color: '#407F59',    glyphSymbol: 'o', specificity: 'Neuron',  glyphName: 'circle'},
                {gene:'Rgs4', color: '#407F59',    glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
                {gene:'Prkca', color: '#407F59',    glyphSymbol: 'd', specificity: 'Neuron',  glyphName: 'diamond'},
                {gene:'Cdh13', color: '#407F59',    glyphSymbol: '^', specificity: 'Neuron',  glyphName: 'triangleUp'},
                {gene:'Pde1a', color: '#407F59',    glyphSymbol: '<', specificity: 'Neuron',  glyphName: 'triangleLeft'},
                {gene:'Nrn1', color: '#00FF00',          glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
                {gene:'Pcp4', color: '#00FF00',          glyphSymbol: '.', specificity: 'Neuron',  glyphName: 'point'},
                {gene:'Enpp2', color: '#00FF00',          glyphSymbol: 'x', specificity: 'Neuron',  glyphName: 'cross'},
                {gene:'Rasgrf2', color: '#00FF00',          glyphSymbol: 's', specificity: 'Neuron',  glyphName: 'square'},
                {gene:'Wfs1', color: '#00FF00',          glyphSymbol: 'd', specificity: 'Neuron',  glyphName: 'diamond'},
                {gene:'Plcxd2', color: '#00FF00',          glyphSymbol: 'v', specificity: 'Neuron',  glyphName: 'triangleDown'},
                {gene:'Neurod6', color: '#44B300',         glyphSymbol: '+', specificity: 'Neuron',  glyphName: 'plus'},
                {gene:'Nr4a2', color: '#44B300',         glyphSymbol: 'o', specificity: 'Neuron',  glyphName: 'circle'},
                {gene:'Kcnk2', color: '#44B300',         glyphSymbol: '.', specificity: 'Neuron',  glyphName: 'point'},
                {gene:'Rgs17', color: '#995C00',      glyphSymbol: 'h', specificity: 'Neuron',  glyphName: 'star6'},
                {gene:'Slc17a7', color: '#FF0000',        glyphSymbol: 'h', specificity: 'Neuron',  glyphName: 'star6'},

                {gene:'Plp1',  color: '#c5c6b9',        taxonomy: 'MOL', glyphSymbol: 'x', specificity: 'NonNeuron', glyphName: 'cross'},
                {gene:'Aldoc',   color: '#ffffff',      taxonomy: 'ACTE', glyphSymbol: 'h', specificity: 'NonNeuron', glyphName: 'star6'},

                    ];

    return out
}