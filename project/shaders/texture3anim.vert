attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform float timeFactor;

varying vec2 vTextureCoord;

void main() {
	vec3 offset=vec3(0.0,0.0,0.0);
	vec4 newoffset = vec4(0.0,0.0,0.0,0.0);
	
	vTextureCoord = aTextureCoord;

	offset = aVertexPosition + vec3(0.0, 0.0, timeFactor*0.1);
	newoffset = uPMatrix * uMVMatrix * vec4(offset, 1.0);

	gl_Position = newoffset;
}


