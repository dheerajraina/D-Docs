import 'package:d_docs/features/editor/presentation/getx/controller.dart';
import 'package:flutter/material.dart';
import 'package:flutter_quill/flutter_quill.dart';
import 'package:get/get.dart';

class EditorTopBar extends StatelessWidget {
  EditorTopBar({super.key});

  final EditorController _editorController = Get.put(EditorController());
  @override
  Widget build(BuildContext context) {
    var screenWidth = MediaQuery.of(context).size.width;
    var screenHeight = MediaQuery.of(context).size.height;
    return Padding(
      padding: const EdgeInsets.only(left: 8.0, right: 8.0),
      child: Container(
        child: QuillToolbar.basic(
          controller: _editorController.controller,
        ),
      ),
    );
  }
}
