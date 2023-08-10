import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_quill/flutter_quill.dart';
import 'package:get/get.dart';

class EditorController extends GetxController {
  QuillController controller = QuillController.basic();

  @override
  void onInit() {
    // TODO: implement onInit
    super.onInit();
    controller.addListener(() {
     //TODO: do socket calling here
    });
  }
}
