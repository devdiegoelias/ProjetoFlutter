import 'package:flame/components/component.dart';
import 'package:flutter/widgets.dart';
import 'Virus.dart';

const ComponentSize = 30.0;
const SPEED = 150.0;

class Bullet extends SpriteComponent {
  Offset initialDirection;
  List<Virus> virusList;
  var bulletDestroy = false;

  Bullet(this.initialDirection, this.virusList)
      : super.square(ComponentSize, 'drop.png');

  @override
  void update(double t) {
    super.update(t);
    this.y -= t * SPEED;

    if (virusList.isNotEmpty) {
      virusList.forEach((virus) {
        if (!virus.remove) {
          bool remove = this.toRect().contains(virus.toRect().bottomCenter) ||
              this.toRect().contains(virus.toRect().bottomLeft) ||
              this.toRect().contains(virus.toRect().bottomRight);
          if (remove) {
            virus.remove = true;
            bulletDestroy = true;
          }
        }
      });
    }
  }

  @override
  bool destroy() {
    if (this.y < 0) {
      return true;
    }
    return bulletDestroy;
  }

  @override
  void resize(Size size) {
    this.x = this.initialDirection.dx + 15;
    this.y = size.height - 55;
  }
}