macro Identifier {
  rule { $id:ident } => { $id }
}

macro MethodDefinition {
  rule {
    $($name $params $body) ...
  } => {
    $($name: function $params $body) (,) ...
  }
}

macro ClassElement {
  rule {
    $methodDefinition:MethodDefinition
  } => {
    $methodDefinition
  }
}

macro ClassBody {
  rule {
    $classElement:ClassElement ...
  } => {
    $classElement ...
  }
}

macro ClassDeclaration {
  rule {
    $name {
      $body ...
    }
  } => {
    class $name extends Ember.Object {
      $body ...
    }
  }
  
  rule {
    $name:Identifier extends $parentName:expr {
      $body:ClassBody
    }
  } => {
    var $name = $parentName.extend({
      $body
    });
  }
}

macro class {
  rule {
    $classDeclaration:ClassDeclaration
  } => {
    $classDeclaration
  }
}

export class;

macro foo {
  rule {

  } => {
    'hello';
  }
}

export foo;