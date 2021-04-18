import 'package:flutter/material.dart';

class Body extends StatelessWidget {
  TextStyle styleBase =
      new TextStyle(fontWeight: FontWeight.bold, fontSize: 30);
  Widget build(BuildContext context) {
    return Center(
      child: DecoratedBox(
        decoration: BoxDecoration(color: Colors.lightBlueAccent),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("ola flutter coluna", style: styleBase),
            Text(
              "ola flutter coluna",
              style: styleBase,
            ),
            Text(
              "ola flutter coluna",
              style: styleBase,
            ),
            Image.asset(
              'assets/images/img1.jpg',
              height: 100,
              width: 100,
            )
          ],
        ),
      ),
    );
  }
}