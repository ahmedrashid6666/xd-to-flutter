const scenegraph = require("scenegraph");
const { exportAllArtboards } = require("./artboards");
const { generateWidgetFromItems } = require("./generate");
const { exportType, exportTo, copyToClipboard } = require("../util/util");
const { exportFiles } = require("../util/project_folder");
const { statelessWidget } = require("./../../widgets/stateless");
const { formatDart } = require("../util/format_dart");
const { changeOutputUiText } = require('../../../ui/components/output_ui');

function exportSelection() {
    const items = scenegraph.selection.items;
    if (items[0].constructor.name == 'Artboard') {
        exportAllArtboards(items);
    } else {
        let generated = generateWidgetFromItems(items);
        const exportTypeValue = exportType();
        if (exportTypeValue == 'stateless') {
            generated = statelessWidget('GeneratedWidget', generated);
        }
        generated = formatDart(generated);
        const exportToValue = exportTo();
        if (exportToValue == 'clipboard') {
            copyToClipboard(generated);
            changeOutputUiText('Generated widget copied to clipboard');
        } else {
            changeOutputUiText('Exporting generated_widget.dart');
            exportFiles(['generated_widget.dart'], [generated]);
        }
    }
}

module.exports = {
    exportSelection: exportSelection,
};