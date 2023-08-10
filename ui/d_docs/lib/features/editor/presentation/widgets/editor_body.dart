import 'package:flutter/material.dart';
import 'package:flutter_quill/flutter_quill.dart';
import 'package:get/get.dart';
import '../getx/controller.dart';

class EditorBody extends StatelessWidget {
  EditorBody({super.key});

  final EditorController _editorController =Get.put(EditorController());


  @override
  Widget build(BuildContext context) {
    var screenWidth = MediaQuery.of(context).size.width;
    var screenHeight = MediaQuery.of(context).size.height;
    return Padding(
      padding: const EdgeInsets.only(top: 8.0),
      child: Expanded(
        child: Container(
          decoration: BoxDecoration(
            color: Colors.white,
            border: Border.all(width: 0.1),
          ),
          constraints: BoxConstraints(
            maxWidth: screenWidth * 0.5,
            minHeight: screenHeight * 0.9,
          ),
          child: QuillEditor.basic(
            controller: _editorController.controller,
            readOnly: false,
          ),
        ),
      ),
    );
  }
}
