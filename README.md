# use Reduce function

## Даалгавар

`index.js` дотор байгаа `decisionHelper` функцыг гүйцээж бичээрэй

* **decisionHelper** function нь 1 л parameter(minScore) авдаг.
database object нь хүмүүсийн мэдээлэлийг хадгалаж байгаа Тийм бол (score >= minScore) энэ нөхцөлийг хангах хүмүүсийн нийт score уудын нийлбэрийг буцаа

Жишээ нь:
* 400 гэж оруулахад 800 гэж буцаах ёстой
Санамж:
* **decisionHelper** дотор  байгаа /*******/ оронд нөхөж бичихэд хангалттай
* Эндээс уншиж болно https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
