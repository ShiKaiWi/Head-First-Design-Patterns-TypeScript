# Head-First-Design-Patterns-TypeScript
使用 TypeScirpt 实现来自 Head First Design Patterns 介绍的模式。
# Design Patterns
我本来还是相当推崇设计模式的，但是在公司里一些前辈的建议下，让我淡化设计模式本身，记住软件设计的原则，通过多看多写，来自我领悟软件工程的精髓所在，以避免生搬硬套，而走向歧途。
# Design Rules
## 0.隔离变化代码(Encapsulate varying code)
应该说这是设计模式的核心思想，所有的设计模式都是按照这个规则来提出的，因此这个规则也没有什么可以说的，只需要牢记在心。

## 1.面向接口编程优于实现(Programming to Interface ranther Implements)
这是很重要的一点，在举例子之前首先需要知道这里 Interface 和 Implement 的意思，尤其是对 Java 的使用者来说，很容易产生混乱。

这里 Interface 更好的表述其实应该是 Supertype，所谓面向 Interface，其实应该说是面向 Supertype，而作为 Supertype，我们需要知道的是使用 Supertype 再配合 Polymophism，就可以使得代码的变化变少，因为 Supertype 类型的 variable 有着更强的代码兼容性（越抽象适用性更广泛）。

而所谓的 Implement 其实是相对于 Supertype 来说的，面向 Implement 编程实际上就是在编程中经常使用具体的类或类型来定义变量，从而导致代码发生变化的时候，改动会非常多。

下面举一个例子会更方便理解。
### 问题描述：现在假设我们要设计一个游戏场景，场景中我们需要让一个狗发出声音，面对这个需求我们怎么实现会比较优雅？
一种快速的方法其实就是面向 Implement 的实现，首先实现一个 class 叫做 Dog:
```java
class Dog {
    private name;
    public Dog(name) {
        name = name;
    }
    public getName() {
        return name;
    }
    bark() {
        //...
    }
}
```

然后在需要的地方，加上这段代码：
```java
Dog dog = new Dog("Spot");
dog.bark()
```
看上去挺不错的，然后你要知道代码工程中，最常见的就是需求改变，比如，将这只狗变为猫？在这样的时候你该怎么办？
你会说很简单啊，实现一个 Cat 的 class，实现 meow 方法，然后改代码：
```java
<<<<<HEAD
Cat cat = new Cat("Mimi");
cat.meow()
==========
Dog dog = new Dog("Spot");
dog.bark()
>>>>>Old
```

现在看来改动也不是很多嘛，但是这里只是举一个例子，然而在实际工程中，很有可能这样的改动会牵扯到几十处，那么那样的改动就十分痛苦了。

现在我们看看如何使用，面向 Interface 编程来解决这个问题。

记住：面向 Interface == 面向 Supertype
因此我们首先先设计一个抽象类：
```java
Abstract class Animal {
    private name;
    public Animal(name) {
        name = name;
    }
    public getName() {
        return name;
    }
    public makeSound();
}
```

然后我们继承这个类，先实现 Dog 类：
```java
class Dog extends Animal {
    @override
    public makeSound() {
        //...
    }
}
```

那么调用这段代码的时候，我们要这么写:
```java
Animal animal = new Dog("Spot");
animal.makeSound()
```

如果再遇到要将 Dog 改成 Cat 的情况，那么我们就可以先实现 Cat 这个类（继承自 Animal），然后只需要改动一行：
```java
<<<<<HEAD
Animal animal = new Cat("Mimi");
=====
Animal animal = new Dog("Sopt");
>>>>>Old
animal.makeSound
```
这里也许有一点不好的事， animal 这个变量名太过抽象，代码的可读性不是很好，其实这里可以用具体的名字来代替，之后可以借助一些 Refactor 工具，可以瞬间改掉所有的名字，完全没有任何风险。

## 2.组合优于继承(Favor composition over inheritance)
组合优于继承的原因其实是很容易理解的，一旦使用了继承那么你的方法都必须被实现，被实现就意味着代码无法动态变化，无法动态变化也就意味着复用率变低。
而如果使用组合的话，我们便可以使用 Supertype 来持有某个类的 Instance，然后在需要变化的时候，可以将这个变量动态换成另外的 Instance 并且同时不对代码造成影响。

## 3.低耦合(Loose coupling)
不同对象之间的耦合度越低自然会带来越好的编程体验，不过在说它的好处之前有一点需要理清的是，什么样的耦合算低？
我现在的看法是，两个对象之间对彼此的 Knowledge 知道的越少，耦合越低，那么什么是 Knowledge 呢？
具体来说有两点：
1. 就是互相暴露的 public method，也就是说暴露的越少，耦合就越低。
2. 使用对方的 public method 的次数，使用的越少，耦合度就越低。（**有待商榷**）

低耦合带来的好处是显而易见的：
1. 修改各自的代码实现对另一方的影响会很低，或者说只要保证暴露给对方的 method 不变，就几乎不会对对方造成任何影响
2. 代码复用率高，双方的使用场景将不限于彼此

观察者模式就是这条规则的具体体现。

## 4.拓展类而非修改(Classes should be open for extension, but closed for modification)
好处不必多说，花了大力气写好的、工作正常的、可读性好的代码，如果随便修改那是多么可惜，因此拓展类而不是修改它。
其实这条 rule 的关键在于怎么做到？这个问题又分为两个子问题：

1. 怎么在设计的时候，就避免之后的出现必要的改动？
这个问题我觉得自己暂时还讲不清楚，可能更多的是需要经验，然后总结出规律。
2. 怎么在使用拓展来代替修改？
这个可以借助一些设计模式，比如 Decorator。

## 5.依赖逆转(Dependency Invertion)
这是一个很重要的原则，在 Head 书中我个人觉得讲得不是很清楚。

