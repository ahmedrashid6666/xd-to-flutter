const materialColors = JSON.parse(JSON.stringify(JSON.parse(`{
    "Color(0x00000000)" : "Colors.transparent",
    "Color(0xFF000000)" : "Colors.black",
    "Color(0xDD000000)" : "Colors.black87",
    "Color(0x8A000000)" : "Colors.black54",
    "Color(0x73000000)" : "Colors.black45",
    "Color(0x61000000)" : "Colors.black38",
    "Color(0x42000000)" : "Colors.black26",
    "Color(0x1F000000)" : "Colors.black12",
    "Color(0xFFFFFFFF)" : "Colors.white",
    "Color(0xB3FFFFFF)" : "Colors.white70",
    "Color(0x99FFFFFF)" : "Colors.white60",
    "Color(0x8AFFFFFF)" : "Colors.white54",
    "Color(0x62FFFFFF)" : "Colors.white38",
    "Color(0x4DFFFFFF)" : "Colors.white30",
    "Color(0x3DFFFFFF)" : "Colors.white24",
    "Color(0x1FFFFFFF)" : "Colors.white12",
    "Color(0x1AFFFFFF)" : "Colors.white10",
    "Color(0xFFFFEBEE)" : "Colors.red[50]",
    "Color(0xFFFFCDD2)" : "Colors.red[100]",
    "Color(0xFFEF9A9A)" : "Colors.red[200]",
    "Color(0xFFE57373)" : "Colors.red[300]",
    "Color(0xFFEF5350)" : "Colors.red[400]",
    "Color(0xFFF44336)" : "Colors.red",
    "Color(0xFFE53935)" : "Colors.red[600]",
    "Color(0xFFD32F2F)" : "Colors.red[700]",
    "Color(0xFFC62828)" : "Colors.red[800]",
    "Color(0xFFB71C1C)" : "Colors.red[900]",
    "Color(0xFFFF8A80)" : "Colors.redAccent[100]",
    "Color(0xFFFF5252)" : "Colors.redAccent",
    "Color(0xFFFF1744)" : "Colors.redAccent[400]",
    "Color(0xFFD50000)" : "Colors.redAccent[700]",
    "Color(0xFFFCE4EC)" : "Colors.pink[50]",
    "Color(0xFFF8BBD0)" : "Colors.pink[100]",
    "Color(0xFFF48FB1)" : "Colors.pink[200]",
    "Color(0xFFF06292)" : "Colors.pink[300]",
    "Color(0xFFEC407A)" : "Colors.pink[400]",
    "Color(0xFFE91E63)" : "Colors.pink",
    "Color(0xFFD81B60)" : "Colors.pink[600]",
    "Color(0xFFC2185B)" : "Colors.pink[700]",
    "Color(0xFFAD1457)" : "Colors.pink[800]",
    "Color(0xFF880E4F)" : "Colors.pink[900]",
    "Color(0xFFFF80AB)" : "Colors.pinkAccent[100]",
    "Color(0xFFFF4081)" : "Colors.pinkAccent",
    "Color(0xFFF50057)" : "Colors.pinkAccent[400]",
    "Color(0xFFC51162)" : "Colors.pinkAccent[700]",
    "Color(0xFFF3E5F5)" : "Colors.purple[50]",
    "Color(0xFFE1BEE7)" : "Colors.purple[100]",
    "Color(0xFFCE93D8)" : "Colors.purple[200]",
    "Color(0xFFBA68C8)" : "Colors.purple[300]",
    "Color(0xFFAB47BC)" : "Colors.purple[400]",
    "Color(0xFF9C27B0)" : "Colors.purple",
    "Color(0xFF8E24AA)" : "Colors.purple[600]",
    "Color(0xFF7B1FA2)" : "Colors.purple[700]",
    "Color(0xFF6A1B9A)" : "Colors.purple[800]",
    "Color(0xFF4A148C)" : "Colors.purple[900]",
    "Color(0xFFEA80FC)" : "Colors.purpleAccent[100]",
    "Color(0xFFE040FB)" : "Colors.purpleAccent[]",
    "Color(0xFFD500F9)" : "Colors.purpleAccent[400]",
    "Color(0xFFAA00FF)" : "Colors.purpleAccent[700]",
    "Color(0xFFEDE7F6)" : "Colors.deepPurple[50]",
    "Color(0xFFD1C4E9)" : "Colors.deepPurple[100]",
    "Color(0xFFB39DDB)" : "Colors.deepPurple[200]",
    "Color(0xFF9575CD)" : "Colors.deepPurple[300]",
    "Color(0xFF7E57C2)" : "Colors.deepPurple[400]",
    "Color(0xFF673AB7)" : "Colors.deepPurple",
    "Color(0xFF5E35B1)" : "Colors.deepPurple[600]",
    "Color(0xFF512DA8)" : "Colors.deepPurple[700]",
    "Color(0xFF4527A0)" : "Colors.deepPurple[800]",
    "Color(0xFF311B92)" : "Colors.deepPurple[900]",
    "Color(0xFFB388FF)" : "Colors.deepPurpleAccent[100]",
    "Color(0xFF7C4DFF)" : "Colors.deepPurpleAccent",
    "Color(0xFF651FFF)" : "Colors.deepPurpleAccent[400]",
    "Color(0xFF6200EA)" : "Colors.deepPurpleAccent[700]",
    "Color(0xFFE8EAF6)" : "Colors.indigo[50]",
    "Color(0xFFC5CAE9)" : "Colors.indigo[100]",
    "Color(0xFF9FA8DA)" : "Colors.indigo[200]",
    "Color(0xFF7986CB)" : "Colors.indigo[300]",
    "Color(0xFF5C6BC0)" : "Colors.indigo[400]",
    "Color(0xFF3F51B5)" : "Colors.indigo",
    "Color(0xFF3949AB)" : "Colors.indigo[600]",
    "Color(0xFF303F9F)" : "Colors.indigo[700]",
    "Color(0xFF283593)" : "Colors.indigo[800]",
    "Color(0xFF1A237E)" : "Colors.indigo[900]",
    "Color(0xFF8C9EFF)" : "Colors.indigoAccent[100]",
    "Color(0xFF536DFE)" : "Colors.indigoAccent",
    "Color(0xFF3D5AFE)" : "Colors.indigoAccent[400]",
    "Color(0xFF304FFE)" : "Colors.indigoAccent[700]",
    "Color(0xFFE3F2FD)" : "Colors.blue[50]",
    "Color(0xFFBBDEFB)" : "Colors.blue[100]",
    "Color(0xFF90CAF9)" : "Colors.blue[200]",
    "Color(0xFF64B5F6)" : "Colors.blue[300]",
    "Color(0xFF42A5F5)" : "Colors.blue[400]",
    "Color(0xFF2196F3)" : "Colors.blue",
    "Color(0xFF1E88E5)" : "Colors.blue[600]",
    "Color(0xFF1976D2)" : "Colors.blue[700]",
    "Color(0xFF1565C0)" : "Colors.blue[800]",
    "Color(0xFF0D47A1)" : "Colors.blue[900]",
    "Color(0xFF82B1FF)" : "Colors.blueAccent[100]",
    "Color(0xFF448AFF)" : "Colors.blueAccent",
    "Color(0xFF2979FF)" : "Colors.blueAccent[400]",
    "Color(0xFF2962FF)" : "Colors.blueAccent[700]",
    "Color(0xFFE1F5FE)" : "Colors.lightBlue[50]",
    "Color(0xFFB3E5FC)" : "Colors.lightBlue[100]",
    "Color(0xFF81D4FA)" : "Colors.lightBlue[200]",
    "Color(0xFF4FC3F7)" : "Colors.lightBlue[300]",
    "Color(0xFF29B6F6)" : "Colors.lightBlue[400]",
    "Color(0xFF03A9F4)" : "Colors.lightBlue",
    "Color(0xFF039BE5)" : "Colors.lightBlue[600]",
    "Color(0xFF0288D1)" : "Colors.lightBlue[700]",
    "Color(0xFF0277BD)" : "Colors.lightBlue[800]",
    "Color(0xFF01579B)" : "Colors.lightBlue[900]",
    "Color(0xFF80D8FF)" : "Colors.lightBlueAccent[100]",
    "Color(0xFF40C4FF)" : "Colors.lightBlueAccent",
    "Color(0xFF00B0FF)" : "Colors.lightBlueAccent[400]",
    "Color(0xFF0091EA)" : "Colors.lightBlueAccent[700]",
    "Color(0xFFE0F7FA)" : "Colors.cyan[50]",
    "Color(0xFFB2EBF2)" : "Colors.cyan[100]",
    "Color(0xFF80DEEA)" : "Colors.cyan[200]",
    "Color(0xFF4DD0E1)" : "Colors.cyan[300]",
    "Color(0xFF26C6DA)" : "Colors.cyan[400]",
    "Color(0xFF00BCD4)" : "Colors.cyan",
    "Color(0xFF00ACC1)" : "Colors.cyan[600]",
    "Color(0xFF0097A7)" : "Colors.cyan[700]",
    "Color(0xFF00838F)" : "Colors.cyan[800]",
    "Color(0xFF006064)" : "Colors.cyan[900]",
    "Color(0xFF84FFFF)" : "Colors.cyanAccent[100]",
    "Color(0xFF18FFFF)" : "Colors.cyanAccent",
    "Color(0xFF00E5FF)" : "Colors.cyanAccent[400]",
    "Color(0xFF00B8D4)" : "Colors.cyanAccent[700]",
    "Color(0xFFE0F2F1)" : "Colors.teal[50]",
    "Color(0xFFB2DFDB)" : "Colors.teal[100]",
    "Color(0xFF80CBC4)" : "Colors.teal[200]",
    "Color(0xFF4DB6AC)" : "Colors.teal[300]",
    "Color(0xFF26A69A)" : "Colors.teal[400]",
    "Color(0xFF009688)" : "Colors.teal",
    "Color(0xFF00897B)" : "Colors.teal[600]",
    "Color(0xFF00796B)" : "Colors.teal[700]",
    "Color(0xFF00695C)" : "Colors.teal[800]",
    "Color(0xFF004D40)" : "Colors.teal[900]",
    "Color(0xFFA7FFEB)" : "Colors.tealAccent[100]",
    "Color(0xFF64FFDA)" : "Colors.tealAccent",
    "Color(0xFF1DE9B6)" : "Colors.tealAccent[400]",
    "Color(0xFF00BFA5)" : "Colors.tealAccent[700]",
    "Color(0xFFE8F5E9)" : "Colors.green[50]",
    "Color(0xFFC8E6C9)" : "Colors.green[100]",
    "Color(0xFFA5D6A7)" : "Colors.green[200]",
    "Color(0xFF81C784)" : "Colors.green[300]",
    "Color(0xFF66BB6A)" : "Colors.green[400]",
    "Color(0xFF4CAF50)" : "Colors.green",
    "Color(0xFF43A047)" : "Colors.green[600]",
    "Color(0xFF388E3C)" : "Colors.green[700]",
    "Color(0xFF2E7D32)" : "Colors.green[800]",
    "Color(0xFF1B5E20)" : "Colors.green[900]",
    "Color(0xFFB9F6CA)" : "Colors.greenAccent[100]",
    "Color(0xFF69F0AE)" : "Colors.greenAccent",
    "Color(0xFF00E676)" : "Colors.greenAccent[400]",
    "Color(0xFF00C853)" : "Colors.greenAccent[700]",
    "Color(0xFFF1F8E9)" : "Colors.lightGreen[50]",
    "Color(0xFFDCEDC8)" : "Colors.lightGreen[100]",
    "Color(0xFFC5E1A5)" : "Colors.lightGreen[200]",
    "Color(0xFFAED581)" : "Colors.lightGreen[300]",
    "Color(0xFF9CCC65)" : "Colors.lightGreen[400]",
    "Color(0xFF8BC34A)" : "Colors.lightGreen",
    "Color(0xFF7CB342)" : "Colors.lightGreen[600]",
    "Color(0xFF689F38)" : "Colors.lightGreen[700]",
    "Color(0xFF558B2F)" : "Colors.lightGreen[800]",
    "Color(0xFF33691E)" : "Colors.lightGreen[900]",
    "Color(0xFFCCFF90)" : "Colors.lightGreenAccent[100]",
    "Color(0xFFB2FF59)" : "Colors.lightGreenAccent",
    "Color(0xFF76FF03)" : "Colors.lightGreenAccent[400]",
    "Color(0xFF64DD17)" : "Colors.lightGreenAccent[700]",
    "Color(0xFFF9FBE7)" : "Colors.lime[50]",
    "Color(0xFFF0F4C3)" : "Colors.lime[100]",
    "Color(0xFFE6EE9C)" : "Colors.lime[200]",
    "Color(0xFFDCE775)" : "Colors.lime[300]",
    "Color(0xFFD4E157)" : "Colors.lime[400]",
    "Color(0xFFCDDC39)" : "Colors.lime",
    "Color(0xFFC0CA33)" : "Colors.lime[600]",
    "Color(0xFFAFB42B)" : "Colors.lime[700]",
    "Color(0xFF9E9D24)" : "Colors.lime[800]",
    "Color(0xFF827717)" : "Colors.lime[900]",
    "Color(0xFFF4FF81)" : "Colors.limeAccent[100]",
    "Color(0xFFEEFF41)" : "Colors.limeAccent",
    "Color(0xFFC6FF00)" : "Colors.limeAccent[400]",
    "Color(0xFFAEEA00)" : "Colors.limeAccent[700]",
    "Color(0xFFFFFDE7)" : "Colors.yellow[50]",
    "Color(0xFFFFF9C4)" : "Colors.yellow[100]",
    "Color(0xFFFFF59D)" : "Colors.yellow[200]",
    "Color(0xFFFFF176)" : "Colors.yellow[300]",
    "Color(0xFFFFEE58)" : "Colors.yellow[400]",
    "Color(0xFFFFEB3B)" : "Colors.yellow",
    "Color(0xFFFDD835)" : "Colors.yellow[600]",
    "Color(0xFFFBC02D)" : "Colors.yellow[700]",
    "Color(0xFFF9A825)" : "Colors.yellow[800]",
    "Color(0xFFF57F17)" : "Colors.yellow[900]",
    "Color(0xFFFFFF8D)" : "Colors.yellowAccent[100]",
    "Color(0xFFFFFF00)" : "Colors.yellowAccent",
    "Color(0xFFFFEA00)" : "Colors.yellowAccent[400]",
    "Color(0xFFFFD600)" : "Colors.yellowAccent[700]",
    "Color(0xFFFFF8E1)" : "Colors.amber[50]",
    "Color(0xFFFFECB3)" : "Colors.amber[100]",
    "Color(0xFFFFE082)" : "Colors.amber[200]",
    "Color(0xFFFFD54F)" : "Colors.amber[300]",
    "Color(0xFFFFCA28)" : "Colors.amber[400]",
    "Color(0xFFFFC107)" : "Colors.amber",
    "Color(0xFFFFB300)" : "Colors.amber[600]",
    "Color(0xFFFFA000)" : "Colors.amber[700]",
    "Color(0xFFFF8F00)" : "Colors.amber[800]",
    "Color(0xFFFF6F00)" : "Colors.amber[900]",
    "Color(0xFFFFE57F)" : "Colors.amberAccent[100]",
    "Color(0xFFFFD740)" : "Colors.amberAccent",
    "Color(0xFFFFC400)" : "Colors.amberAccent[400]",
    "Color(0xFFFFAB00)" : "Colors.amberAccent[700]",
    "Color(0xFFFFF3E0)" : "Colors.orange[50]",
    "Color(0xFFFFE0B2)" : "Colors.orange[100]",
    "Color(0xFFFFCC80)" : "Colors.orange[200]",
    "Color(0xFFFFB74D)" : "Colors.orange[300]",
    "Color(0xFFFFA726)" : "Colors.orange[400]",
    "Color(0xFFFF9800)" : "Colors.orange",
    "Color(0xFFFB8C00)" : "Colors.orange[600]",
    "Color(0xFFF57C00)" : "Colors.orange[700]",
    "Color(0xFFEF6C00)" : "Colors.orange[800]",
    "Color(0xFFE65100)" : "Colors.orange[900]",
    "Color(0xFFFFD180)" : "Colors.orangeAccent[100]",
    "Color(0xFFFFAB40)" : "Colors.orangeAccent",
    "Color(0xFFFF9100)" : "Colors.orangeAccent[400]",
    "Color(0xFFFF6D00)" : "Colors.orangeAccent[700]",
    "Color(0xFFFBE9E7)" : "Colors.deepOrange[50]",
    "Color(0xFFFFCCBC)" : "Colors.deepOrange[100]",
    "Color(0xFFFFAB91)" : "Colors.deepOrange[200]",
    "Color(0xFFFF8A65)" : "Colors.deepOrange[300]",
    "Color(0xFFFF7043)" : "Colors.deepOrange[400]",
    "Color(0xFFFF5722)" : "Colors.deepOrange",
    "Color(0xFFF4511E)" : "Colors.deepOrange[600]",
    "Color(0xFFE64A19)" : "Colors.deepOrange[700]",
    "Color(0xFFD84315)" : "Colors.deepOrange[800]",
    "Color(0xFFBF360C)" : "Colors.deepOrange[900]",
    "Color(0xFFFF9E80)" : "Colors.deepOrangeAccent[100]",
    "Color(0xFFFF6E40)" : "Colors.deepOrangeAccent",
    "Color(0xFFFF3D00)" : "Colors.deepOrangeAccent[400]",
    "Color(0xFFDD2C00)" : "Colors.deepOrangeAccent[700]",
    "Color(0xFFEFEBE9)" : "Colors.brown[50]",
    "Color(0xFFD7CCC8)" : "Colors.brown[100]",
    "Color(0xFFBCAAA4)" : "Colors.brown[200]",
    "Color(0xFFA1887F)" : "Colors.brown[300]",
    "Color(0xFF8D6E63)" : "Colors.brown[400]",
    "Color(0xFF795548)" : "Colors.brown",
    "Color(0xFF6D4C41)" : "Colors.brown[600]",
    "Color(0xFF5D4037)" : "Colors.brown[700]",
    "Color(0xFF4E342E)" : "Colors.brown[800]",
    "Color(0xFF3E2723)" : "Colors.brown[900]",
    "Color(0xFFFAFAFA)" : "Colors.grey[50]",
    "Color(0xFFF5F5F5)" : "Colors.grey[100]",
    "Color(0xFFEEEEEE)" : "Colors.grey[200]",
    "Color(0xFFE0E0E0)" : "Colors.grey[300]",
    "Color(0xFFD6D6D6)" : "Colors.grey[350]",
    "Color(0xFFBDBDBD)" : "Colors.grey[400]",
    "Color(0xFF9E9E9E)" : "Colors.grey",
    "Color(0xFF757575)" : "Colors.grey[600]",
    "Color(0xFF616161)" : "Colors.grey[700]",
    "Color(0xFF424242)" : "Colors.grey[800]",
    "Color(0xFF303030)" : "Colors.grey[850]",
    "Color(0xFF212121)" : "Colors.grey[900]",
    "Color(0xFFECEFF1)" : "Colors.blueGrey[50]",
    "Color(0xFFCFD8DC)" : "Colors.blueGrey[100]",
    "Color(0xFFB0BEC5)" : "Colors.blueGrey[200]",
    "Color(0xFF90A4AE)" : "Colors.blueGrey[300]",
    "Color(0xFF78909C)" : "Colors.blueGrey[400]",
    "Color(0xFF607D8B)" : "Colors.blueGrey",
    "Color(0xFF546E7A)" : "Colors.blueGrey[600]",
    "Color(0xFF455A64)" : "Colors.blueGrey[700]",
    "Color(0xFF37474F)" : "Colors.blueGrey[800]",
    "Color(0xFF263238)" : "Colors.blueGrey[900]"
}`)));

module.exports = {
    materialColors: materialColors,
};
