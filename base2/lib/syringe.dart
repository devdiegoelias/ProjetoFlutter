import 'package:flame/components/component.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

const ComponentSize = 60.0;
const SPEED = 150.0;

class Syringe extends SpriteComponent {
  double direction = 0.0;
  Syringe() : super.square(ComponentSize, 'syringe.png');

  @override
  void update(double t) {
    super.update(t);
    x = direction;
  }

  @override
  bool destroy() {
    return false;
  }

  @override
  void resize(Size size) {
    this.x = size.width / 2 - ComponentSize / 2;
    this.y = size.height - ComponentSize;
  }
}