import 'package:flutter/material.dart';
import 'package:flutter_quill/flutter_quill.dart';
import '../widgets/widgets.dart';

class TextEditorPage extends StatelessWidget {
  TextEditorPage({super.key});

  QuillController _controller = QuillController.basic();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromARGB(255, 241, 241, 244),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          EditorTopBar(),
          EditorBody(),
        ],
      ),
    );
  }
}
